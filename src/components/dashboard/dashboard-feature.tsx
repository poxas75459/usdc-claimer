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
    "Sk5ys5iHVGXKQdhcujqkZaLk3PskfMpWNCxERr29E3ww2hyn96wmdGiy3v68XzUjpYSXLwm989vknDbeNWTJ59S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wcg8yHHS8wqVoWyuAvRW881oarSWAk3xsNPamMLUyUJ2MwxpHyjmNq9x9ffbWqwRCFXNqPj2ubgCAMUyiV2J1b3",
  "key1": "3W1EwsbH4at7uCLC2PDtkCMKp8n3N4BxmfPAz7EnosSi93T6TBFvW3MydWKwtFG4ThTL9eUWNQVd53NUX7DHcwKF",
  "key2": "3CAMKPWSjiqz6cLndDo8EPHSvTipA3w677y7C8vEGnC1hoZ8haFSqYQNVPVJkLAMyZYkW9mVRM8NDKqFQA3Sthr4",
  "key3": "2xSe7ox3Zsnmc5vDYkY4AWg1udimo6p7W9pvAWGkBcnnXufTiUArDFH8qChgdW4yYG9W1sGPaiLku6KYwMmVRMa2",
  "key4": "45aMk1eTWtXFXbNqFjmvGqAtGxzroKSiatCAfoz1swnhW9UebyxLfh6rRpenL5WWnYXiKb9YLM8gWmEECzK1hnSM",
  "key5": "3ETuQzVLY25XeBHVMHTZf8VwiLs7uum8EtPrCXE9JXehb59wE81io2UAC9vpMTKHETVfJHTRm12TYA5oWNfNkL4D",
  "key6": "63onoB3M6hL3Zq4sEZpTT9SokTjm5sZfcaTrAecXJkDCCtdPmucwZKceBsawrJ2Vui1Wvc5psfZQjXxi5ToXwPNW",
  "key7": "4pr8waxGLtHe3ueg8WhCUuEBssNYzQZfvVCMsrEDQBSVzZSUqd2TqZdGotoS8yt5bbTHCSGr9Z2xZiXrBZoZ5Twv",
  "key8": "3ysfreW7WW6FN5JvQTKaiJw6DdxhxAn8YpmkGMFNUGsTMGYhWspbtkDvp1u2CjLmBmepzZ74rqM7R8T9UccJvi2h",
  "key9": "4wEiHsMqqBWxkNe5Zh49sCdZ1YDSwSzDVpopvkW7ZXRD6yY66iFawV2KsiHN2aJem1Zfvr1XLWr9uQHnmx2spbNM",
  "key10": "5YWFQEHbF2LeUiAn6NrpTAskMuduHsPQ9ZozVd2C11bnL1WGFzvrKcuW3EcE4DrWtNALepVjBUVtUEA88d5tTcN8",
  "key11": "36QVDqic4r7HfagAuUb36ShUaNSixgMAgKHsGvR8Zeg5JT1WtQDLTUUzrbPB4Qd37EkdTkoshRKJCbruXiChjLAc",
  "key12": "5wjEJno5uZjJtmVxfmPNUQj2RwvbhLs3YL2z5HkT2JzKERHBxviWp6J8F9GoSBDk1wwMg3GC2KygRVL7vsoZrBpf",
  "key13": "4fbi6e5PpZ33aN1ddH3fRBoqDYqNzw2PRYtsYT1ATG8PAgjyREojFQY3pGtXaC16ExoA4Qk9PGkdDs2UuStwGwQf",
  "key14": "3DH1mpucoUHcxv1UqbqxUr7NWnVh821GjE5ZzKd8u9aJdCJeLyH5MDVaimBhdbfpihU8dM57vVfaK1LMiQiD3VzD",
  "key15": "2SaN8aaHE1ccewZwabPqPEqGkSFsabtA7zfPPpEtwzewrc9xMngat5VhJFz76dvc1F2CvC2eeRwu1yqxrj348tvN",
  "key16": "22f29ctQSLVjeZJysQJJ2jnpedbH5TyGSeS8h94YcH2BPVa1TJZGW4v7aACz6TEBs4SgK6S6nBLtTxcHAFVrCD5U",
  "key17": "5yKjLw6jeUzq8fama8gyNiM8Tj4W3iARXccgWisrHWffA2FHP8EiMDW4w59AmCMbCYMcPj5xgp6L4oscNnzsKp5b",
  "key18": "5DBkndJPYbw7aZUzcBWHTZxj76iXCj5qRdrSaCUsLpeK9HdonCR4UEWGKWZhj7FrwdSiAcP8JQWYcBFbydSXVdeG",
  "key19": "3GDGuRE3gMc5j3nM9jfKLY8MXsXeBJSjvNTKpnVMVSibWZG61rG7PynLjFTNoAiPeQm32aZNMMM8Rbbn7WXwm24a",
  "key20": "bwQgmL1rDQhpsboL71f42B47TAevV188aU4vsFu7REtMfhF25MNKPJsTe6QoMHTU4iP9qMYN3E8XPti6EFfrfGH",
  "key21": "3cUsvV77QuuSRuffkxGMmqRMTXkNLxaTsuWgnSLUpZRfqf5sFp89CmTdAHjQ9qBBmB7g3WNqDJ3KKvYYCsBjaYhZ",
  "key22": "4Xqi3w8t3pqP2igm7tUcWHnt5pY5Rj7CsUx5ySvZYFabRZWYzfqrwwxiYP12cKM5XQVZYYBkqYRgwJihqKUy5EVv",
  "key23": "3amm9j2vWQy4nitzmTUNaqdbQTUyYpJqjAeLLMFkmd4qATMu61MhVc4unG314vCyiANMXNrvExjWeGLzXiAX5rYt",
  "key24": "2ix7GfAB1Kq9ZfiBoPPrfpCmuvhcyfisjiSWCSaXpRYyx5EarTtHgCsQePqbqdgXCy7qFfXVZTTTmiTpmc4DpG3S",
  "key25": "4iAhEYQQx8QKkndpjpoM1bxaYN89JGc9CHbpMWuKu9q7ZVanWvoXfxVRwdoaxZi12cnDww8Fw5U3PiaaBMjzaaTg",
  "key26": "52tv7khERuX2GXSxYt6rHxtFBiP2Zqacv7HwS1M7K3Br3WtLrGB6R3yxbXn69YAjoHp4N6RLg1kbqErxGKUMup21",
  "key27": "2cYQ7yBMfZWXdQR8RCGngByvFRjp1GdgswMy1gVNdq3aoVDDGGXenxbMAWvawux2qNsuQ4vNYnmTsX1NjBvpA1m2",
  "key28": "4ErKLArju8RV1CAt4mjxcaBxQfqEbX7rLXFsX77pYXShpeT3jAdBHN4yn4HA88W86a7dnPd51zvB15VDyosriCzg",
  "key29": "44EtTnJhvU4B7yUpCAmYem8uRXTVisRb1CSofJBSS6xsJZGekEfVqEZWFb2cfKbQ8BamwkBNixZFCR8q8MUAnvUZ"
};
// KEYS_END
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
