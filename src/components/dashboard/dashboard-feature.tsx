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
    "2uMwDu14gh5HZkrkjXucJeSKPWQBS1YzczMunVHYC9Dp5SKoL6GRGv7NZ9Aqp9WNreQQNjhCfYdbBv53J975UQVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7mgUJMFqQ4C3avHM2mZy8ANPhiNRBmH2kQvNMtYaipdJXtRyXVkVkVPidF8PnBdwgJNhcgxLFPoQiN7MXjCbWPq",
  "key1": "5ub7UKFG8k468iW4p67uZZGd6MwpjybqJAa18caJr7P2LjFFXQYRk95GHL8spFfp2h2x2se2aDwLQnixsrSAsPNg",
  "key2": "2MrmXLtBNztigNLJmhwcKqUj3KKdq2ezg4eNiojccpoGJJHxxU5eDgvjqkeFsK9LZhtM1gpTJufQA3y3EZQ6v4wc",
  "key3": "3xSXRbVaNXgz6gGmx1p463Sv6LYPYFV2MmaLFFp8ay4hBzd5HPNPgmp8ei771eyyzLARzmEpeoDjpxocuTyJZfiW",
  "key4": "3XcqteBjPkvPWQXm4mLP85FjrgYAHoReLabs6refNaBL3dAHC1DoWAaRUpEQjopXmXiSGLVcmUdwok89R3GV3Mnn",
  "key5": "CvNGNy38nBNU6dM4nyHGCG9KtJ1HgpwY4RV6pEbefBf5YTXNNMmZVw6bB9njeF7vfrG2dPVR1PCAiSBE87JcUYw",
  "key6": "5XGFEeNeEUoA5gx1FVTapW7h26Q4aMLLAzxfC6WEVRsXikwoVKgoLbjFpkgXr6XArqTRKRfx7GC1fS5w43gg3Exw",
  "key7": "5KiW9hRpRWXiPRJegXJ8VQGmAAsfhKFW48nXiJuShgX7TVDyBvZBNZxrELcApiUA5Mwnyy791Vm7utT5hkdw6X4R",
  "key8": "39J4AKqW6oiDAtkjNCTetyCsdQtPb5FcZa5Cv9fkmocMqNKFC495H8WrRuquNgarFy11vAAR13CZDYW6gLxdKVtk",
  "key9": "24tEwzL26DBXAQyYP9bmX4iJWUoR5MUaZbS5VMMqZxjAzHddigH9kttQrRMaAkjPpwSdMBVZXDfaZmiA41GCS1ha",
  "key10": "LMP5tbHixnueGwTSoYGyPHiRRkuFAUmWdYh2iQuKhFRpsPuEsD28z1pN7gJoJDuAE6Q1ynzUSPnCtysWPxAL41q",
  "key11": "657QoHV6vkeWyxAEkqVV5mB9xqQnmkjEwW9TvssEJPy4zfncR64PmMb7K3wsi4Sw1vyJz98k6gVGV6UmMHoXDexR",
  "key12": "Q25ihzrHLJ7rkNJP1NgF51ZKbMy7mnaTqcB3nG515XzdYYpirQytPvZCF7PxvqGN8ZPw9Z95j27jAn9dZb6pMrn",
  "key13": "2oCcfVZvW6oRXUARPD6waV6sLGju6di7UFDm8DmPFVsZGA2qHPTkfCTmwKE397P1DEds2AZTQm14xuqVEJmwARmS",
  "key14": "R6Scy8vy4mABeGwHZe5DFYkHJVqSnhaFeSotRPtpmRcyTyMTo2S3JDo4cTA8fPQLq8La7dq1AYowrTctFKwiNoR",
  "key15": "7A5RPMZkYR7QHEgJ2Fb1JvezwUzvVmCnMsSWxoB1RLHhhbiCYixuRpygTyMZMUKSUK1tkgrrsDDmKNKxMtgveWh",
  "key16": "21aqtaTjNBtPyhm6fDiuFCxfdyxNM4t661YtbworAEWxaPZSTh7gACGrzUiWjGW6bfZSYrgRgRjXTe7Eb36JM5ji",
  "key17": "4b75Joj8KVBTGhhS35y5SE68Q31RzcHqvk2jBMjVr2EgX7vvQxHTCCgDvdqssaZgSxvtVaiQ7zrxafXUdYQmGPDN",
  "key18": "31MnxwQoJvYWYXomK1sJDvuzs42SEyWHHLwhDTdzyqRZZ9aKtqsoBczUqZ8SnwF9uVLepQ84DMTTHBaA2GB4oagA",
  "key19": "3zReHyGTfu1JqQS3KC73EL9LyVAydV7inc3su4pzAhSj9ZtdQTSLg9EU49UgGEJjx8CfVS7aJbptrNVpSLc6ZR9G",
  "key20": "4Aj1A66K9dhDPHcusMyucX8DBRDRZKjQV1TvmwSSgvZaeBaSJ6Cad3CR1C2NYxDe2QEHToV7aMcLNq8rHpYGZ2Ec",
  "key21": "3UaPJcwYGLTHGfEUzD6ssRuJR3mD755keurkDgiya1wWXDHG4u2SPQryznCTbVXKc4vMmKtUAfiEJFG7Vna6wJqu",
  "key22": "227NwcGiiveRprN7YbHq6XAq7dZunbUuBQncyVMaMwZ1s9xdvJ6WYD2n7fT5WeVskLCCJgzxJLbjt7hzDLrL5j1p",
  "key23": "5XsdFnUmzywczB2k2EgQZsZ569UF6E2QmyQR82QMrg71eRRLQ6oZJrRuWKzDQRJepUerR8xtq6ZXneqAnEmSHiCA",
  "key24": "5QTdGwn4pgW4rHa9t5t5caQDzJjJXWA3MazH6xMHwV6291i4GD775cgeSgUoNanhHKhwjG7tFhnLqRiteWY3LVUd",
  "key25": "3Z2FUZLT6TuqhsCj3uFNQSErhVykjKWuYGyrxTJrq4wsowymTzJE52QwYWjWJ4SNJuYJriQLHzsBZeJ4bDkpXGgt",
  "key26": "38jkYfQDjAYsdLHtaknDxTq2wVvWoZQNQys17YBk1k8o8BP4PBWzFZsksQEJ2GSNqv5azHxqzfLv3zNAdPYfDMtr",
  "key27": "34CZ8rkMWv2snsbpp8cTKCnrb6hFoXDDrf7XD46bUnh2qgh19Ey2668xTEjrMGfxFJCLYMPiE4UiuLp1wqHQDpbP",
  "key28": "53EvHvmkEg331vykLMMofCDQjks18p1jrq1DSTJdbfrCRubxciDL9BStGJ513HLFggpCBJfZ9Wj2pssnfgczJ9m8",
  "key29": "Efnhj2b6Yo79D6qDkweGicGSeWHnHHtTdKnqXDoSd4B4p71JoAUsWbWL7C8hq3aH2n2vFJcA5eKVqXgVJqBKFzz",
  "key30": "3fQpzR6v9MSAmbpjLsdMv6DDzHaGwVsQzes6W68PmgbXuAixatxHkAVUKQKPJyLj4wDb1Pz8FVP7Pf61sRhAWxVk",
  "key31": "kK8gfVkx89RHBFDth7ceRyCc9YuTXwHAL8BUxUyYxPFgyU9s7ULNta4KJQeDxNtFhXkwTgtaXcCNm4p7amsJMbc",
  "key32": "5XwRckWxK6RQnrRRvrcph3XJSzE6fbJjM1toVRY34mw5WLuRf6XYBvvALCXpwXcQtPLzjBnzRNd7yXePKfhdG8mD",
  "key33": "47UarwRxhemo73XSyR98mSrMdRnUFvtqUQYHC4L6qi7rcS1KgXZHGRKoMCtnLLdzV2b9ZC2MeGxQskZ7hUgW7VsQ",
  "key34": "5cCwzd1Z6D3HnGurhreWgeDjRkZFy84hp2Y5nz8pNb1D1QXRSCWwrZrn1EbnvKbHhPjYurD9vqoMC7HTiuksfHYU"
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
