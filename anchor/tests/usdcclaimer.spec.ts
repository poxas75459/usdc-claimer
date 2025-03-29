import * as anchor from '@coral-xyz/anchor'
import { Program } from '@coral-xyz/anchor'
import { Keypair } from '@solana/web3.js'
import { Usdcclaimer } from '../target/types/usdcclaimer'

describe('usdcclaimer', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider)
  const payer = provider.wallet as anchor.Wallet

  const program = anchor.workspace.Usdcclaimer as Program<Usdcclaimer>

  const usdcclaimerKeypair = Keypair.generate()

  it('Initialize Usdcclaimer', async () => {
    await program.methods
      .initialize()
      .accounts({
        usdcclaimer: usdcclaimerKeypair.publicKey,
        payer: payer.publicKey,
      })
      .signers([usdcclaimerKeypair])
      .rpc()

    const currentCount = await program.account.usdcclaimer.fetch(usdcclaimerKeypair.publicKey)

    expect(currentCount.count).toEqual(0)
  })

  it('Increment Usdcclaimer', async () => {
    await program.methods.increment().accounts({ usdcclaimer: usdcclaimerKeypair.publicKey }).rpc()

    const currentCount = await program.account.usdcclaimer.fetch(usdcclaimerKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Increment Usdcclaimer Again', async () => {
    await program.methods.increment().accounts({ usdcclaimer: usdcclaimerKeypair.publicKey }).rpc()

    const currentCount = await program.account.usdcclaimer.fetch(usdcclaimerKeypair.publicKey)

    expect(currentCount.count).toEqual(2)
  })

  it('Decrement Usdcclaimer', async () => {
    await program.methods.decrement().accounts({ usdcclaimer: usdcclaimerKeypair.publicKey }).rpc()

    const currentCount = await program.account.usdcclaimer.fetch(usdcclaimerKeypair.publicKey)

    expect(currentCount.count).toEqual(1)
  })

  it('Set usdcclaimer value', async () => {
    await program.methods.set(42).accounts({ usdcclaimer: usdcclaimerKeypair.publicKey }).rpc()

    const currentCount = await program.account.usdcclaimer.fetch(usdcclaimerKeypair.publicKey)

    expect(currentCount.count).toEqual(42)
  })

  it('Set close the usdcclaimer account', async () => {
    await program.methods
      .close()
      .accounts({
        payer: payer.publicKey,
        usdcclaimer: usdcclaimerKeypair.publicKey,
      })
      .rpc()

    // The account should no longer exist, returning null.
    const userAccount = await program.account.usdcclaimer.fetchNullable(usdcclaimerKeypair.publicKey)
    expect(userAccount).toBeNull()
  })
})
