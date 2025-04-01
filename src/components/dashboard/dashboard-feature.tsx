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
    "62wgsdD8SyNWmkVHthWGRaT2KUAhNsz1fHwWso8SowKQStPjS9mv59Fdp5FwcJVd2TbdFqb9hvdMCKoQrhqJtWqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33gvShi2xbBfzbK6UVsraqWXGLVcJQq4TE5qKqnjE3yYCVPhnA5gpbqDvnFcfg78UYMPDDVFzgzi7SEf7MPF2kdo",
  "key1": "2H1Zt1tJ25BnGP3JukjueHREFxaSWrKDrE2ybxJKXTx8XGUawLtDAud8s63khAK1WtAwawPQfwcsKxxUgUgbohAQ",
  "key2": "3k2KULNDFboyKkhpVGzKu1ajFy16NZx34245aJ9gqCPndZQcAjAVZJPog7ChrmHFxwcJ8GW2Kcaxjps15tH4AFsF",
  "key3": "3x1XF9o2AfH8bXrSAqVu9i9C8ESYBws3EtD9vT1vL75CiZqvU6qN5cStFT3Js4UA3272zux58qhD6TnZHcebpqqD",
  "key4": "37ei4BBkzamgoGDuoHmd7FzPzAPSBGos3LAHFTx5hCipAKVH3EAeL4rKJNfiCHKHxuXH3sX2H8kQdNySii2AmxaD",
  "key5": "5VCywjBUmF22BXJpPjUqukira3FuaHRT2VphYUs81fUkPp1yRgjXFxHij661d92ZEtKF8obhQKC6dEasHejP9zMU",
  "key6": "n8foh4fCxuw9WDJmfHPN8s4hN5bLmUKohjV22B1uYm6SjQN3Q4m7o9NztM79mVXD9685ZC4wx8iFYiHUQPuh1F1",
  "key7": "567VdW84Exwg1tJvshiGMUsyPC5zbhGG3Q3ZytyDJysbpNyJCByY55tLg8wXbwVAEoVbEoDb64i5mtkuLv5vzZq",
  "key8": "2YwenBEXfqfmoKUvUashqNmwW4WYAcgux6XvgCH99quXqVKB89T4851uGesi2mgk8Tao8D8pJAFhwtwT1nQtsVym",
  "key9": "PdhVDQRC6jSLWiebPGKSFFziDuF48wRbsCg73AsyUdTkc88XGo9E9vYLE12vgWn5bq9HoSDxoMSHJgoMnxUjTkb",
  "key10": "562v9QkgmZ2gvarj1bdCrBD53LtzSFz8Kionpm7dxSRzNdWiaAgwik4x2vuL1szADFPJRnKwwFeq3Soeb1rXakJP",
  "key11": "4fqsce1gEusFe6s2sAwbvEAuVbNr3AjHq38bbdUveG6nT1DvPy3sRQ8xRnDngpqBoHepik6KbA8bnupQCc6KyoWa",
  "key12": "taFmHF6wEwccDn2EUv8dzMLHZuNuaJrwzCfN1yoFgZDFnptt6L8zX1vJJpzzhKnbWRNb8jj7KHxZf9RyfsGRHQ3",
  "key13": "2qed9VCaRNuD6kHy9GWZUpkZ3qMkt7tUr4A4eYJQzzkN75w3XfhqZoekyRUqCP1D6fgmgTMSe9KJ5f394TAUBDTE",
  "key14": "ma6egdY4RBKcQFnSAj7cuX1mncfjnNEdXP29wuwNm31mnugJeV6FJwXAjrRDnsx86GfwUM7JQTdVPu3vHdBX4J5",
  "key15": "5gjWbHqaLYvktS7CgwviB4Az5uqRujauk5tmkrX46WR5Rs6bqu6DbWVRyMa7Afs5zdHUYmKu33kig1vPPW4Hugk9",
  "key16": "bmhdtfaPA93qdNuqYDqd2MUww3nejopLUGqyQhdUWpjyKutKZ7a3fbS8ABqWRcLhkZ5iTsqWaGVy1S8qxhJbC1v",
  "key17": "2yynwd9rM4XL5BdFaMxVm7ptX9niHXWbYWbZWQD1KRos5nEAyPjnC1RWTVk2Qx3UNethbEyya8eXPtLqdHrRMVNv",
  "key18": "2UDHmyQh7Sk5pBy2q3pvaPY5qEyvRzTWEd48MYEavBqauAAF62KCK7n6tHXu5rugyyiHkyLo9SvTtjxMLbfVsX3o",
  "key19": "3kFpfGmCAmwBURkXwNvN1YQVVjn9SaQUN4EeRq231hkRfFubM3N3ZYTspTALe9Hy7AQeSHhJ2rYVqY9x1TkCkwr9",
  "key20": "3GizVzPB4k8TVqGuFSekVUukAotNWKVMcgoy492Kf2bWkwEsD9ciUsqLs9CM7arX3D6tGzy66hfJnrXVEccJvD5y",
  "key21": "5y9JhoEfrfG3n7vQSXMtTtNrPhbMbrV4qYPFkoVZGFmuxRP3zrPskKskDAV3F2e5i9fuEXNLwt2dQ8zfw8Xjd62s",
  "key22": "unzj8UWuh4FoDQAHY9UXz7NA3o2b4aqsj3d5DtiTYurbUnYQs6swPWbYvzAptMHeHGEVvEC66xZKsujL13cg754",
  "key23": "5TRw5oVjtAwJ7aUqvMavgncfANUW3hh6Cmhph9vbGnWZawnjKgoiz2XK51B31iC76Kfmzj8ixEDij2J7oQyWScDQ",
  "key24": "26ihuCa7TRFrNa5Sv1vUgJvz4rrrZVBBDAZpTVhJctLN5hCusHYBtgykm17PfhW1EfCgWQ8nSTSE8EwnnppLnpWS",
  "key25": "5o983RYkxDH9Mnwi47qUgjQQ58V3XEhrDVfRLt6Gpa5e5SRq88kPvi2uavcyLwedXgCT13C8vYUY5GEvcnrtvPZ1",
  "key26": "4ydYze4K9FZaKvmRbmPfhJzg7fWCuW3vrqtZfga4oumkYf5mfNHMA2ZiWWw3eDyHdY7VcKhfZ3PBx73zgrwF55y7",
  "key27": "63GttytEQq34gE1Rr4UAMZV25RCG1SB3pDqEyKbqKHgyfkDUcgA24hsAeJUdLH8knSinzbibhFhYSSqGRhoZMDvn",
  "key28": "Dv9zHwJRWyybUKm2sG2HooFHWxAgPAa7V5wgiU2P8AgWeajqVqi1CWG8CfNf666Barqgbne8s4AWXLhVMquDetn",
  "key29": "3NqksS7iTe4LVGerwRd9pv3sqjFWWJKXp5nHtbKYW6aMvM4MmnaW6EvQNkYtCTr7DBcc9jhGgJemmbH8WH7USzrP"
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
