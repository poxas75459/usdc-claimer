// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import UsdcclaimerIDL from '../target/idl/usdcclaimer.json'
import type { Usdcclaimer } from '../target/types/usdcclaimer'

// Re-export the generated IDL and type
export { Usdcclaimer, UsdcclaimerIDL }

// The programId is imported from the program IDL.
export const USDCCLAIMER_PROGRAM_ID = new PublicKey(UsdcclaimerIDL.address)

// This is a helper function to get the Usdcclaimer Anchor program.
export function getUsdcclaimerProgram(provider: AnchorProvider, address?: PublicKey) {
  return new Program({ ...UsdcclaimerIDL, address: address ? address.toBase58() : UsdcclaimerIDL.address } as Usdcclaimer, provider)
}

// This is a helper function to get the program ID for the Usdcclaimer program depending on the cluster.
export function getUsdcclaimerProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the Usdcclaimer program on devnet and testnet.
      return new PublicKey('coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF')
    case 'mainnet-beta':
    default:
      return USDCCLAIMER_PROGRAM_ID
  }
}
