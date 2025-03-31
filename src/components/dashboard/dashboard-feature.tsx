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
    "3ZpQJcMkm3JHnh3fzQgjiBeMMmcveEYrGgUR7AYZwXYm7wtEAX4RsCBA61FbF3aoeZBzHNDtZtNHNEmvCaugoqWQ"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "66fMTyj9MCydoZkAUNFwZXm93SMQ9h52wLASffCcBYAXAdicBenBVWMC4LtYKupMd6TkSNta8ameqfyhbjN3v5MG",
  "decoyKey1": "3TMZmF5CJzH1iJ978fPjdSb93L7ag8ajtXXquuFTSDK9ZPEh4N1QAkEvS6tjQX1Pubg4c9x84ugsruLXPY2varSX",
  "decoyKey2": "3M1Kbawrhd2fo3poM8rFYRPSthztGvb4s6dm8uXcNemKXhm3vWKNLepZt4Do6ZRYrqFELSx3VM7BDVc48TgZig2h",
  "decoyKey3": "5VUgdeAAD8VppNP8Zh83oH2NhPnmLuMe6YzmweuBt7ut2cQwA6d7oSdbbGmwBcZ5wvj95ZzyC6Q1Prkbc4mcdDbR",
  "decoyKey4": "4HFh7jszLfkAaYjEogvSJcBXLguYtKg37n1Mc6YVuNuRdaFgGuBkhGvTTixTyhFLKgP513okXHqFo9Bc38rZPxuH",
  "decoyKey5": "ic1AayNN3vFkrRbgLhetsTNufyn2Hu5q4ZCvQrHfgZCt1sqCe1yS9uxcYWAqebCbcduujs4Am4XgCGghbmhFcB1",
  "decoyKey6": "2ogm3Z225g8HWQ6ZcvBEzs2w7FSEDEUtt1VdcYbjNGoriruxuJ7rndrREEtkGXqMqvahzgjAV66iYQNSVduGMZJV",
  "decoyKey7": "3ahGBitsRbc1mx5P2ukx2QWkrKpLZNgB78dPG7DHxbx9q9PxBzG1J5thAvbnz9wQnG5BypxjWhZ9d2zZ7ucD5RUa",
  "decoyKey8": "e5RN17kGBFNR6jiH7fUyxspdcW6FLJQ94VJhMJKeDRCCTHfLRqPMQFRfWji3dxpGYwZmrpeV5yh7VZf3ivg5EFE",
  "decoyKey9": "5ZxzG8jrNL9zgt4hhDth9jpxxisqsDRr4a2Wv8WWoRCcfVYWqLuZTCccuDEpKduPK2beTKZR1SnpKFU34gf7HVi5",
  "decoyKey10": "4CAeMebgPzDAJt4mjo6GHvtZVU9PkNMHuu9ALhDJWagLhymZSvaSJbwGEaZDiA5aAmZKkRQ3qg22a5qmQ1wimYcu",
  "decoyKey11": "3YmaZicc7ehWbKFP54XHNazgsGkkNh5U2JonT6SuNScfCgXcjgfAve4fhcyfytjZ2fRvQzS7LXwpors5nqoFRrKa",
  "decoyKey12": "5qwx7bNzAGG49KjQ3MWikaGYcGZpEUdPinNvjnDgybEdRqsPraN9nKPUVcjtR25rmrCAJFkt79ztJgxSXfM238HJ",
  "decoyKey13": "64aLSXkKw9dwehGCU691wR4n1Jbk2qU6iYH3eYcCASg4f5Sp3ijzFVdT6uKqtNUxtNFvwqXmK3cgfC18duPw3K7B",
  "decoyKey14": "5hpijT7Rh9pvnUUKk1JzKvA3M7ReL8Yy4ZaudurvYZkucgagm1DYp2knuNf4JXSk2NcS4AkdCfn9rdDT4hn7QB96",
  "decoyKey15": "5oos3hMVSfexRa18vmBDBerasaE6pW6YMwgMMVBn4q14CC4u2ErnyuKdbB3Gv1DDc3vohamBBQfVTCi2ZESxeunh",
  "decoyKey16": "CZJFEbkUKJhRm27uCnwscahbtFK12NFYDR8LgykqoVKrnMDLUHiW2Q94WP73EboPmR9eMEbFrp7NeuHQezgUjUu",
  "decoyKey17": "zenRu3obRpFxqk83azyhqRvuZrLHpxH1Ltah99Kc7F1vYnTbqxfwm7gCBnAGGgmwmx8gWyAMSp4stH5ErswMrQA",
  "decoyKey18": "5Cvc6hJQjYrsTYdE2EiB4HhbDkwvyaYRwbaTdY4hzzUcYjZNg1DWY6Su1QqgmqzoDD2gAYnZXcmQQy9YqKEQKPBN",
  "decoyKey19": "3wYQpQ1aZp4mxywejpRpSZy1ys1KP2MyjadC4E94dBKtRz4h7eqBPfJXt9Ytt1u1zsmKVaVc2wrAM55cPYJA5NwW",
  "decoyKey20": "4bkeG6pPiZCAah8Dz6UFwUhQotSjZan24X7jzLQxAQ4T7eUcmGqdM8nt6D819nNTP1VSCVQCRi1Nvgo3UxsVHHns",
  "decoyKey21": "34qMKHzG9Qne69832EXzfusWxUR568UKpCdGeUEdJJWYhCSLvJwiuqCYGx2XwM8kiNghsKJYxfhPgR2dgcFnU7fS",
  "decoyKey22": "4ZAL5R9kCjY4ebcLnVhZSe6Sco1WWeLg97MUjsSZaT5nkdcrmV7dmPDNYnPs31WrChoDbDdgLYgLmXMSwLvMs1Uo",
  "decoyKey23": "5aXVKKTPmrTqYehN29WroXQwJH92J95cSMnsitip2Aywmm53PrkjgMR99pEHBThvkbNFFP6VVVxFhy1jsRpogdkU",
  "decoyKey24": "2V5mn7p4YBnd2unstrZnpN5KvBE76wAw786Cs4Ux6cVoG77JbaKPWAo5oT58b2Lz1CYrsRf2w6oMaxUgQZHz4zUX",
  "decoyKey25": "649ZVgMiYV67ojR2cwD37PpKs7yN67NypN2ySFjs7Wbdg9AFpeDzFXKExkZ9Ls4S7yVoH7Qr5tHjvLgHWbYbWkJf",
  "decoyKey26": "2pYduA69S4zE7J58kwWZozDqcNL8v4o74ZUgidGjTgPpikoYgeAFDeazKDYzyi7wbTcAChG6yaNMRpEpz1mXs3Z8",
  "decoyKey27": "47uPsjTjQ4umMZEAU9ng1B6AswmumgQgDd7iTCTbvvescQqcEMcFEQRabe8WC7mMYT7scBkBwbMJQ5J7dn7n1dw5",
  "decoyKey28": "7PunnzkXhqYQ2Yff8bDDdbRfuZ4W6jZdv4Wwj7B5pHQrvivNpSKxkrCAmrDXsqeiGTKxdkUeMNtwYbQnwkN1rtz",
  "decoyKey29": "3N39EdvdUvgYkot1GGzdbpp2ehCyV1U1kpppekHudiZiSwVTpLcy2GKR6xQWdtzYV6zcjwXzCvhTfR66pA29Po83",
  "decoyKey30": "4Uptr2a5ji5iFQtoYitgAq5zUxqJGm42NfctEBvUjbrtoMANBWU4zoVcBuJGJYyAe4F3uhRr1pk5V7KJguirKcRs",
  "decoyKey31": "2jzyTZeUtGRofr1anUW5imuQUxqBjNDyN6da9rEBK1p3n3us6CSqVgnmwBtsYAn3NXyL8Z5yhZuV9T5Nbn6cCkTJ",
  "decoyKey32": "2da6MTeWTWvtUxCcsC3MWJhA4NpCoKr2v8oLjaZzjir2JTZL39pi95KEQaWaZ8yYDBVKTt7YwgX7FqANngidrJ4",
  "decoyKey33": "3iCYx5Qq1mP1UZNWdXThoec8NPqRb7o2sS8CCnEuWBUhQ4gKdQJT8Hngzs8ovR27CVtygVdDig7uiMYxfxtLAYgW",
  "decoyKey34": "4dqut8N7WNQXo3TrMSucJkHvv7Dutq6B8947adrPXNfCs2HumbZF6amDeutoaxXsRZZtsnQfxcqfTrfF9HCXzCtA",
  "decoyKey35": "2H5RLnfYiBwtaB1AymwRCspp3kWC7RsXw7rKHpkoHCMk8dKCJ1qxjhbF6rxjrfKg7r2ZL3dQxpz3j4C82CV3d8hr",
  "decoyKey36": "2H6juYvhD6SWdVZp8CokwdadgMyStyGKcPjDXGsbBpnJgAzqtybWzVnKpJkgZ2UKGCwu4P9JzBNbLRqAXQepCXKs",
  "decoyKey37": "2ctcTxEwg5jGdSkxDNihpjTELy3vVgnNmCTifJ2o1eP8uiDrUewheLLSG7g4FBdES3kWFkYHhNhvoA1TeL3R6ZcB",
  "decoyKey38": "4fUm7cHZ57ZmoqqrdUbNWU2FHNKTBuMZ18h2fEKHTUy5X2MTaVGCXTzToax8CsJ55Wqx9PnMQoYfCXwmyAVJaFcP",
  "decoyKey39": "4mh8MHbdry6JPbY9PvbB9YvJKnYjZVZVhL74ZBYk3nx4Rh7gWCLNmTmrPkTy7oe5kZShZm1LxS3aE8V86hoRJfnz",
  "decoyKey40": "47io4n3VCQP4Q28R9noKhiPh4XMRg1JdmVYYtNiJht5fmdeyD6sFT4NenFHK5t9SP36pRBXCZjvMB5E2K2kzQTPk",
  "decoyKey41": "4fv311Ztn3wxH7e1rZRRu22ZqEhwvSs4zg7VAMVGvyyFxiKehUadrykU9Bb93veE88Piah1YZ4Y7pvzLXJ7RjPhD",
  "decoyKey42": "4SCsVHTYouzYYty2z3xPHTrN7uGCP1sEyXYxG1kK7Xz68VQ1YEN9MoRtQQHphUKExVhmEKHm859C9ZnC5TM8RmUv",
  "decoyKey43": "bgf652moLNg7LdgY54Gj2HaMkzACkaon7pQeqtPXpiHhzCmvRAnxMPjf11aZRijw9vu5R8AdXk2TAgqQsMug8Fe",
  "decoyKey44": "58ffmcodRXQwvSof8eBGG9ZS8QDxbsWrMHbZ7y6tF1hdQmBCv4gRhB78nhZUUMFiaUyzKqYfDKbANKDydmLXd3hn",
  "decoyKey45": "yGEsRFcBDTeuEtJNai8dBvELzi35rd1TBVsUK5uy1FnBYxssRCsGNKXDwYtetzkTazhLN5iBwBGHbCf6tLFeUB8",
  "decoyKey46": "7Lgc9T4GTHZBVXN4E8pQrESTMfyrYcJSJLxRbjmCeP6NBdpMqjghc3Ys7GLyNuf2mMvmZ83Arf3phvU93UWwuRd",
  "decoyKey47": "4uCbnho7h8i6gqNKFyKUMq94mejL4qH5oQvgEdHXDhyjunsEJc9eTuE4wJ4kCSbS8N9zUmekxESdRowycc6zmjZf",
  "decoyKey48": "2tSseaHiPqaHbh5C9BB6Ct29Q2HkxLgsnmspRHzKzqz6yEMpEbRmJemhf33KfT5QbWnQLmqXvpR9gtEeBiNcKdQN",
  "decoyKey49": "m9jGNGSWHsGaGVWdbSfvayy72XkpKZtmNU1RSfYmJ6v4HUuXNfzeXitmRMCndpzynUdsUP689eszsPEvXPN4i94"
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