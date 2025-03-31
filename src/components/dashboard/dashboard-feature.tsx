/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3byb2vDiNJQDkWYecoTKeH4ujiethDRgzs9vHhH1tThimbwRWvSXBEpgvSjj2Pc21nm183xbVSWH7n9k9QPeKFK6"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "T13yav5aSLDrHDJ1VPJgCmJdnJZXPmPZfnFifmKf3GbQRYNDwJHAmFqTaGBJDNY7yRU9fkKTKja7kbqyHCWfTdz",
  "decoyKey1": "3YogiwExFM3ayPFzLfJQRnyDncvHvQDFvKCocMJnejHEk2Rcs78UD3tgLpmkk2XEU88gHaSUpYZrZQboeK3FW6PQ",
  "decoyKey2": "24Vm5ZmeSpQeV66hgtNLaQUjQmUsake9k7FnbsfqfNF1SqPMcjEuyBa35sfLciNUQcbsSPL9zaexShaTMyADUWNk",
  "decoyKey3": "RyKQpgM6Bz9ghvECYcNqLWGAMYPWLxFiqh8rVF5f9tLHj66DbfSfDFepofHesBnkEJwuzi6LDPM1Rgmf8WiJGZD",
  "decoyKey4": "5DYdcqFm8zYTpUEj4PWGcjfXrycccKj4ntiaBgxmbWAqjNKKV5nRi99phdnZbe8ptdCMGfpsh7t8vG4aMYVqmXXg",
  "decoyKey5": "23WnXFVXddBYKaaE4yTzdLCoqkCHaBc6EiFcAW7TUTDgjVEXz36B1Yi92Fg1tN8aXRYXN2u3XrRCdPuJxFN47CQh",
  "decoyKey6": "3buyz9nYs2WVFP4vYHkMKUhz8XJ6ZNJZeXtwk9pRrQYZdzPXqdJMCzWogbJLTtypstsnaz4xLKtQVtKomwN7cnay",
  "decoyKey7": "aPMjoUCCNePzBGpHh583NgJP8AHLYDJXPLpjRkFvKBoFFwiBJZjmdgMq3krs81mRJmkDX678L2RY3QGu7xGnb1e",
  "decoyKey8": "5XwpDDRjnpDtfYkP3drsd2iSywrezijUpZLGXWp2g48CxNWrhVSVkSAjeERT6w4eJrUY7TY9THsPJM1X8Rsahnkf",
  "decoyKey9": "5YRPbJy4UCFgF6okqyi4hqhBKaXhKpAhGpa6YSJMFPkP3CUxLLVRGhYUqNgTYuDA7NLyUJ3cSFxR7zhPrmPttuxL",
  "decoyKey10": "5TM7tceBTvU2hKfAkZ1ZbSwMHXwBwkpKpvvQmszsVppiEuPg9ieU8PE24k9355kmyRmgUrg35kp5jHVQox46jfSr",
  "decoyKey11": "21mBDy25xYEDonQx3w69d7urGweGL1LBfxNUNywdXnyzcHFdBy6oM8R4CYGknhpktT5YzYChDbKnWAZ8B2gveBv6",
  "decoyKey12": "uKctp5XWNwqTYziGDDqMJmrSJLmmurCVNLz1SiGo8uUWyLRiKbuYtYwDpAvDmpvLex35NUM5HFsR4YP2Y13HD4L",
  "decoyKey13": "fy9grHbeQHYq2wbm8N61db48peZYAPLAsGZkynwv2cUQKRUYdZpNoJy7evSn83E66KrFhLfRGcjjtY8n1fsorZ3",
  "decoyKey14": "WWPZMPqunHpShqJ6fZHBxBFf8vMrhepmtVX5RjLdF7AxHBtuuMpvxopu6RNejV4StPDf6zEainD98ktqFunML1Z",
  "decoyKey15": "5N6DQmDJ1xQC1A1j7yrjLPBME2xhCv9zW6emrdEk1B7TtVVoR9zBHWHNiDMfiCj2gnBbyZdrbhZMGP6GkmkyGjQu",
  "decoyKey16": "4k3G8Nx72dpoj8xpVc13kQjc3RCaUonfY32AfgHzpNv626GybtfKCCJgmXiE9mZV1SXF8m7cPE3ZgpEnevitez5w",
  "decoyKey17": "2C3zPXs6NyFMmNKArxyJsdje2drKZUatLWLanQEjPv3QcBsuGR1VyybnpE3PNYV9SptkCx9v6KYtxvEbhhzm93oN",
  "decoyKey18": "26nHSAVxCdRosbnswR8Tf25RueViMpDh6jcWJxju2UdF7suXxBWU8vPkyAwJRb222dzRHuT5eVf3SDED8HH4M9vK",
  "decoyKey19": "4bgvcgStskJLPUScAyJqr69Kx2JTeEiKBhZxydtx64Ygzg86gmCakgqcnnLvqLvaYSfNwjWLFCUPFkn3mPPGRMZk",
  "decoyKey20": "51pXWvZUuVB6QMdUXChAMyTDvHuS6uE832wK5YtTST7jNWL944ftERTmMSNnSdzZ19rqJUZni34wfgvpsmRaRXMt",
  "decoyKey21": "4eaUyXCTXRMyPhbqGbNXnm2jKpde6bJ2K1Wj2daVSzuXpapG9j9bohq7s3ZdHqWut45YSfwT18tZrfU9y1DkKkz2",
  "decoyKey22": "5rFFBGc5hH3xxjsTteDuqfEX4B7FWVyMwD9WJrv97zLFkKmr2HmZtgPJSEW5kfuAvKRNiTHcoThiZoPfYSPJkH6h",
  "decoyKey23": "4UbxQ73RCxiG4SAx9y2xQUbcXmxPmfv1rW1kDMi3BtcxaRkFHXhx9nm71mgcvUh7qvYTQKj8KXBxFkEmXc1xwZ42",
  "decoyKey24": "4KytaimLnFe3E6tpMHh5CLnJReEdEADJAUFjJ6UQfWj8irYqfXKTKKeR8rhSvnzHGxed2sCo72XUDooXQTRnzihN",
  "decoyKey25": "3MspqMxmTyRdHCcXRDyrd3FvcYyHWeX9TCPdxyDiCem2AnKQP4zzK5x89XiC3T1o5CTyteYx1SdeHMhjaB3XwiaD",
  "decoyKey26": "2tNk63LWuEjT93ikcLTDixdB1W47Bfqkm2x5yuF2T6wwuMM5jf5Y6ZAZGSPGqztALK7E1AhJHwCyC1aJS8aQ4UoG",
  "decoyKey27": "5r4SQaK6UbwDUmfmx42E3WKLa7RhyFubfYHTofpwGXfLHCZc8BS5KJPTSQbvvhysadXYqGVM2dRpMqTCr3bQ55Dh",
  "decoyKey28": "51j7KcQetGHYLVm2KPKwazoZY85Hp5X9joNqvAEypCBQCAyizpV5FASwgXPAgpsw22wZZ8wvZhRwZq9mU25YJ8Vm",
  "decoyKey29": "bfnUfnRf6VtcSAsKHHP64d21uBtNwgWFUrbHjw89g7XUFf1NYQzAbNtukUcPKhbmtavRrudXtVSSHCsVSySrVj4",
  "decoyKey30": "3FDgr1eimuw5wgvfUef5Zr2Qd4uviPnwtTY3FDj2FunvwXPY1aEdmjePku5p6i52FEQvFjNfRpLyYdbejiH8ewJv",
  "decoyKey31": "2NQMVaA1CrbEgBnoyFnhVSpzW9YoX7VxmoxhZBXEMY1wJ2birH8jdyAt69hcc1Kbu4e9Nn3Z4jiL1QrhLQQfN2yg",
  "decoyKey32": "doGj9WEusRkt94sxN8a2BWBxKNcW1HVp2X23V15AWY7NnvVdxS7R3wFhXxQXFBsAXEqLvgsbMXAerncMiCbZeXa",
  "decoyKey33": "yNKNNrK7o3QaTHjnXPowjSqXYmedZdNSMELZCdBjKHrTwwELUFiehEUWJBnfMYigxhH94rZvWKNA4tjprDtpPQV",
  "decoyKey34": "2TLhvmDASW9VDgriqq8dVBxs4jmTgsssfYf5FaZa9vhkfSJPFEoRGaXGRFREzrYd8W6HAb4D5JVwHj8VUaEm414d",
  "decoyKey35": "3bvCUMu7Pt25WMgY5LkqcBS4rhoYcTEZAAZULGikn4Baj3G2KC5cB3Z58WFD4jCgP3Z2Eqe7wFEYH73Eb7gGcuHh",
  "decoyKey36": "x532HivsMr1RUW8bfjhLmLBtB3tJKGrUiCoejCmC425wNP7tvzN5t8dV9hfcQafjGKGD1L7BaF3PvwCEuqwgzhb",
  "decoyKey37": "21R8iMutcT61Xh18iNDfbAaGPqbV7hJ3BR3Nwdgd23sggj6X7f7fV8xEVFDuKAMiKcCx4NQZ1fU3EhDcp7h8iaH9",
  "decoyKey38": "hS6WMjnT4WL8AkULBHoRgghRPYqu6RGphHpSNcPi2QMX3A6Uv8BY2zwmMo4qtFkVWF6Uo1xegPK2LFEDdnaUJ49",
  "decoyKey39": "375ey8hAcbCHhhD2gSrv7fCXtMrjQZ4q4wMb7GTSdDWCJRdt23u7rb3k3WbXNTBMaiLew3itG2sWdKrDi44Mccy7",
  "decoyKey40": "2CDp7rGA4P8YtyUdN7n6v9WpizYD22QATfy7vzxYpmW3YyX6EdMW4a68za5APUEaxyWSGpvRG3fV4M7LUFg3ZngE",
  "decoyKey41": "38kNZjzG3RWeaQhVB8eiSzC9KMsmCTiNytqyHn7XvcnQHkkeQNE3TRGizqX1GHLocG4Eb11BZtDZwXe7f8n1D9Uj",
  "decoyKey42": "4oRWUddp1JWaf1K4jfGNxnDDJtxD1GANMoKUTw5eJnrSKWuaPLKiw8U3yjXUhZoBbrjRSds6n1dvcgPPBpnC7RdP",
  "decoyKey43": "5cmQyR1KCzFQXx2cKfRsAZL7a22Ycdpk3ntAdkqGoK7HXw9Hs2vHEAJAT4RR7SkFcBQY7txHUDtuxKx7NGVRMVM8",
  "decoyKey44": "2YDMmCnKGVH3roU5xHvHXMUV1CqqZ4q6EMXuCy63jvZaVpCUZX4apXmzVfnQDeKNc8ZVZ7D2gXkxdmnUAQD5bGeH",
  "decoyKey45": "GXpFpzdNoXqg7bzDGESQ57zyuXbi88RLZEf7h4PWyr69fi3Eao9XJdKcdBgagP7bR7Mm73gtwqoTJ5A7BvoBQxt",
  "decoyKey46": "5JGQjLANX1w9QY1gdqz7cWhiaH3Aawz1QuTrt9KST8bzJXxPLRTihooLWW6Z1TqECyo7SGsZ1stpGaGdVJQZbrnN",
  "decoyKey47": "hTCHgrggvDTryBuYd4XzZVdHNaLMWkqv2wKk5LeBhHdtVkckb11bLGmPwKFCokjoMJ8SeWfKzooeq57Byd3Ph18",
  "decoyKey48": "43G3BVn8q9UXb7GpCUCF9twymDoqu2xAxGDAXTKY8qyaeknKkCin87xutwRj5PsKZoCmMWXucN2gfU1BcHthfC39",
  "decoyKey49": "WtpiqxSbNJqUkmwgAVtjoohFaEwBdLRKjFwj8aTSXF71vutuabeg3zrU5VzvPgHQzqLmLybghWZpNkM9MWvyvW1"
};
// DECOY_KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};