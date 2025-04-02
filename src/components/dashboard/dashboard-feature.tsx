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
    "4BTN8ZqvjNbj3WacTrpT66dZJPCbsqgo9QrFjCG4JvRgXzQwXcEnTLTHVmCK2iDMuhQCmRiNqUL8ADvG8hcysAh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TSsrbXEteDJF2t6VAFwwKNRdAt9MHQ1MEVM72bWNYxiQF7fAoTkb3UhsLu4E2VirBZyS5T5tMVAVDqCmuRxjtbn",
  "key1": "2KiRnu1osqq2m1N8RankXVSn1n9YG4rPjiwG9TQYk27HB41kE1HjJrAzhBRcYPvYb3fVop9MbgitabNPWU15wGFK",
  "key2": "JCKdfAtJjB4LDa1xPaCsBuvQj9dV7KfGDJ5ukJgL4X1Xi2w6vePP8xnb29qcwhg1aRGhvgmQBsA5UDb1g9D8X6d",
  "key3": "2YxqmBo1HEsYgJoXp4ghXfLpi4NkcHzTssVywsBMcmeSKGTLC9rD5Ya52EkqSYxtL1sAPZRVn1mdUU9wZ9r76fmj",
  "key4": "2R7znw3adkCdLVsicJLNeRsuDWRRexAogHugGhmhR1Fh5Y2B251EbbX7MqSLu2A5Y9cGuqSJR4KnZzpuYWhxGNRy",
  "key5": "3tb9iXacYhg8P6Dconc413k3nxGDtBRTWFv4GH4CuYFRBezWvhAM6bHTBiRGZxxurXCbJkTijh7WshQo4VEQmrL4",
  "key6": "5fFo78z5yQoF277iSVX6cPK3r4wqfCNq2D44aoxHHumfxvuARi4XFWWvggvPpmdYdrnBvbGy3x6wNmSmaHKmazAb",
  "key7": "2jmPtzN4QbAnsx6JuNpfjNkTb6rk2VqB3HzyFRcVgXLCxeJJQqHymSrjwSVAvfSa5KEgfVz3rxcCZpRyNE5AfSpm",
  "key8": "2GFucqm6i9LAmzNtm6wc1bZru2gTFHFH183kREPeQwMWRxAEGPXYFNBHSEy5WcEHURdJPwx14pZbcBCuCzXjTopB",
  "key9": "3BuZahwvL3p9kDbScQ9CHNLGMqaKWiZoR6EQZ749Qf9MbwTVtGyXnPh75juVbFArBP7PYHxdEsrn5V8iCMpEi8Sf",
  "key10": "32urnJWPmnwhjStZMc11UfaedqVtWQ3raZ8c9hRfdTFqpUvmeXdUyhajK81QkkXBcCNxgqN1um32DHCCXsfGnCLa",
  "key11": "2XkKgL9hVfjwH6t4XNUySoHGcGRXZjfFkbbFi15Msu1mioURHMpvv4q9QQbCmPdnNtFiJfn89iQ7shTF93D6SMP3",
  "key12": "23TixUxSMUBDhRVCQUszye7rEQWJXHjNYe6CTWm4Cswn5bLV3DjQQJFYLeg9tp2o9FHCeZYWAFgjbZLo2TJj9y3X",
  "key13": "5LrjmcLxusuaZoExnMQibVvVdE4wMnpH2UNyTfy2DRhejCmPVuXnTVBnvnytECEKwdjvQuRXA6nqaYfqkRpvVnD",
  "key14": "54VzbdvNnReP9Rfxj3KfYBsrm67QfoaYXKnQPGYwJ9qzQ8pNNJZgokXkik1tX6YmkyAkWXiJueDvHS3b5HesbnyE",
  "key15": "4w8mgVtBE2SYJ4v8UKqd73w6rtdNwJLG97X4AFcaUHucKKYSQyYrVPqqrtnwQGPK5sPc3WZ3nboNVm3ufZKgxR5B",
  "key16": "RzxEvUiQyQJFYGKiLT6W1Xz8yhWUrEyWtz8oYnehFMqv1RPqeJ6E122Eq3cShrb8mkNz6mYjJDTzeJFGc44Wm5w",
  "key17": "4FdPPJ5Xnt2qjw6kvsAzJBvRmncCoccDHpDmQW2SRm8ubETg8S1uw6p8wr33BNZ1pDWpDzv6pkt4y7hY7ea2Heq8",
  "key18": "3AMaZimsgKRLFkJHsnDc3RrYMLjcCQi7GFVrxaJ5Q9PyHMoBAhyQPKGm5bsDZHGa6eER7e2PQSFrHnZtdFc7gxuH",
  "key19": "61xJZeHkv7n9BMcrtusg469L41hJuqRQdfrczJpgwucHguwc5WeBqrrHTeFU2XEBoKoAzKrh8i83JLGWa9FkHQ41",
  "key20": "62fbsn58TFsYQkvNMnHNbPvFJmHy5SoxAcQmzHNuhV5Pv442zhoEK2Nuc2rrABRUCnXT7oke84FqbgJxr5VX48hZ",
  "key21": "2HXkxPEnoYptqGnHKnyn3ZUro6DdARXYutQW5SHLZw84n6sTavCa8bhDe1gV3Y1QCBrW3YU6FUabYsyQmwpub2ZT",
  "key22": "2PBG3wP7aLzPeE9jSnDkEm26Mmg8VTZZpXwy9UXQeVK3j7PNjmBYe9AwiwnfLU8bdKppyPTGvLc3irtXyg4EuYYN",
  "key23": "4aG1rYeGBMjfYiLFcETf8F1UgkofDZjutZejppXq8ZXfcZwSSectewExJWrymiCUk37yg4efsMUfkGHndXo7Abqg",
  "key24": "3dhXCkdgb5h7fWWgA41Btg7xuixA3FXZBgvzukUonvAy2oiLrYZkS9xP5E5qjonFDWEhUah5fojWgbgD9JnP2HWf",
  "key25": "pxbizBppEKTDECJhxcZ5jNtuFyvWG9XWeLy2t68YAWvkyDdRoEu5YzED432tb1nSgW8bc9493MmQs5B87TeGGqt",
  "key26": "74YnbNduMQbM61q55UUEn7NkQECjTZFdzBCQbpJGNRvneMN6F3KcBafGkviBZ7YGKZc9ZZahcvJvQygpeic2Wd9",
  "key27": "2rPHfVqPiYmTg1uGrLK11Wan78DVnQRXpr2nCSM2Kq4RLABkP5wKQDYHQ3mhFg67hMhCuD4JBmox9G6i8XGWLNYN",
  "key28": "3t7uW8mmPd4Bg4HzpRRtnrecUa5S7i57Q44cPTNJ9a1HYcZnPCWssYdXTj6J2yKFRB2yQFG9hCF4XKJkfB95wFZj",
  "key29": "67e1ykvmY9nsGWkSVhrKdojpqqEc9VyReegHYqndBuEhr6x1BihVmNj3vGFsJtK5fgzaMy7Peh2YDbfBVtibbEp2",
  "key30": "5Ds629AvDBVX1bQnAgZo5mXVc8RknV8isadrCsZ1KEGLCBUHG6iE8ou5AdGqF1JMDijsw4mK6bWJPrgduAKjo8Jz"
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
