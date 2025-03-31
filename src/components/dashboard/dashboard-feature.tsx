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
    "4LbHT6V7Eh8t9Uu5zSFComshf4FCt263B7r3XmA1tVcNr8iWcw6Buwd7TAESKfmjhSJHtD94H3j9ps21jriGM2Vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zs6i4NQHj4GEmDPVEJy8BH5QUPEmG97hY8Bvuwsv3qmeuWtUo9HhL7iFFTy4Sus8WrzHZSLwxH6682D1hf77yqU",
  "key1": "3oGFJx15N7hEdS2uR6euDkFpVt2cBke25DqW6GDGkvpNnVfgi6sVX1jpxXsuDhq7S42wdmDgDv9jC18CYGriZNhC",
  "key2": "59YDhYRZm4J2dbPb88AdMBTdYJaM2HuK1t8CN5p2zdXTehqXLceeQ8SQ6WoHEcoc6oukhHxN6i8KD1PZW1QDShqa",
  "key3": "3HG6AjXctupC9ArCWzvnUCaZAL9nEMbLnZHWgv1THWh9i9ThMefsyXN9njQtZHFbApeCqPw8Ncaps3RbE9zLLgQ9",
  "key4": "2GpvAocQkqqbd7uaNnGLEz3FmJfnL7iQkRVDQ5c9AXPpZ1Xi4bBeab7Pne3pDJxjSPrMVnBSPLVKNxxUo4ETFCdW",
  "key5": "5v497kDq5ReZSrD4wmr3KkED1snSVeAEbzgQYpjqurRPwuaVtjdyFw2bgwcypLF4cvqExiya5RwwckDFxVC85f2i",
  "key6": "3arDpauPEzLPteDze3fNkXWSS1PhuWUbTsrDwyngeNHwHkJA5oqrp6arMQbB3J7oA5E8i9aYptNVDiwhsRDha9GK",
  "key7": "5nECB7ZTZ8pctwgaFCrF2P1n1LM7m3dEkm7UxV3MtcMJdpJJ6hJSjVF1CwKBo3iM7uMsepwk93R2Vh1bXTTtVN2k",
  "key8": "2tP8NksZz3pggTRHGKAby35AsTRje9T5qeejnfCLDpvNk8p3ntN4aijSZ66UBHVKHzinPzX8Azu2aCs7dVfUjuML",
  "key9": "4u94a1YYjWSQzfiFP5Aovm2sVLWuSeegmxU9hSn3xRY6XEgBtBVxQwBqQYJkeHkPBWNbnykJUKs1c9xGwKdVwWQ9",
  "key10": "3sCh8m1VfZUTwyLNViKNdv8bBMcqzh3pZrGZYygU1eMN8gApRxjzB8NKKRjn8bWEvkLNguukhX3iFUVdQgTYexhw",
  "key11": "2JYucY7pRDFS7QiyrfXH6RN51ynCWefpjDHP1nS6P7poyuhUcRmkU77mj5i3rpXGbmGj9YzPu2xE8sJfAp5Sudq6",
  "key12": "659ZBMJ75NsdH2XqtRhChdKknFSfzx7MSGNfDvqSbzJWYCV3f7ci3qTy7nBWKHzbCi7rJxi8vBBQbbx2tV6B8kS7",
  "key13": "jRpB4dHBhMqch3yqaFVAvbbEaA2CaatXnSVCXzFqiyz37NAZ5xEAhDaaribJUBDbQAcTevztLmchokWeS3L6Bp9",
  "key14": "2qTtNbV8zAYK8jpPVZbTJjpVgacuq1nQstui9ujaKWJpXqGPQXCp8PKtoPBL9Ws8Dm4vg2NjbQBad53fTF62puL9",
  "key15": "5LDEZePbM9jU2XeS1jL4Ts8Wu6CeFuM86m1cNdC9WYdwSQAcDRo6j7dNzhoHCbLM4eEvfEJhUR7AkX92hatLDJaE",
  "key16": "3paCj9BgdCzyLfvrf6nrD8EPCsKk8tbeA2EFJxKtCmWUp5WorAQHiqV5yfjfMjAGgoMnvKRDzDhBtbym5vfjdjMQ",
  "key17": "35DW2ACGqbBNq4Bk6K3dknnPDe6HZUcMxV2njvuvCp393xmR4rsKz69BLHp9okF1QgCZciL9KQkwQ1pcKsuAZ265",
  "key18": "jHfV1oAkWpCQDTbfHAyqLi8qza7RwKN2rNjxh8Xc1YmSNDp9ZPuHJujpzeCf9gvhqgSkkXj3b7AfhQehv2z7Jcb",
  "key19": "35bQPSgjGhWY9E5xxvDkyQVbxZnJyxTZoXKLuTwi9yYofak3HKA5PkDt1XMjgQFaea3ptggkcW91eNcZeR5mdR4z",
  "key20": "4gsaiiqE2ZpHnE44a4CnT3QVJM5k6sYdGc6c4k5iBtawPvX9Dk1571fEi3wu3QZA6iqLkuoAf8qTopok5AuzUDTy",
  "key21": "2bAVxCb79u6jGXZ9HcEtSd95gx2JFmzoWokoNSXMBgcJZqFTshcYmWMA2oT1vAJvKjuiuoVmzudYLLdAagwXaSrc",
  "key22": "2vUTCrcFbLzyqCJhKfX33ugXjUt657JbwBrde3GrefQBzTpCn8WeKGrjv5f6WJ8wtxym8iCJUGTG9AEYu16nHSfH",
  "key23": "2j5uSHAW7xkrjuAN9JaSnZbRZSAnSPMZBJbWCUDxRt5CHpi6iUip3pUG2sGopWJ7PMQ626f39tdwQ7NvgqAs6ES9",
  "key24": "64Nh615mNpmXr5cDmeRkv6KiLGuT4movWD94QxF65DLPTMZd7W7JJJmTFmQ8Mp2qbaMr2RmRnQ8Aq4cC5vEoWRsN",
  "key25": "5SfFTmgPS7rVZSCqavQBoKZhKtjxCHdWexZ6dBCtzh8s8gXUKXvnGDp7YHU2zvDkQccse4zkFNpKqxSGKDRwWpEC",
  "key26": "4riuFb4BLtEvr2Vs6Rv6nZ1J8DvSpA8oaGPA5Z6LPdRfaH3AZ99psL4ZxqRskwQy6e8uoKBTBcDGZFNmPhqfPMzw",
  "key27": "2MniAUM1G59vcAgqXEauVN38dUdHhQJa7TyDgGXpYxW9hNDoPtW4dHWZ3TCzvno3JDvic8k4vpW8f1H4gpWcRZC1",
  "key28": "5VZ7iVReyKGdoQgXaTer5WR9xuE3eEEFzmuBRHQcAh36v1TLpiq7QNntJ5choKMrTbwnp4qdsDCmHA1CYVcuUgmg"
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
