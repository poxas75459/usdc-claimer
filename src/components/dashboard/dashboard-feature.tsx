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
    "25aZXgubuvkhwGXxRJ8cGQiqyHhCtT1LHUWwR4WA52e23tgvYWaomXUTufV23Ay6PQXpj179NJZbxNCxt7Hum38t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TBVit9vqPKj9BQF3fGYGTkhg1ege8PWUDq684ogyCVaCekPC1F3mQvwFKz8gXRjhDQBTv9a8st8hLRJJ5ksvT3Q",
  "key1": "4GMnS67Weo3Lk2Xc7sbzCDzfyHBxUHFhabGpEKT4v5NFmF3Xuzsivq9YdRYMqw1w9R1BkxVtwhBWemwuV9YBc5Yu",
  "key2": "5TR8tUvL5Fmw21GRBsgwZbcy76f1Xro5LipQWJLUbPE6qhdH7ssSVha83767medGoKgDQqqdaqwL6bJ9XFk7Adau",
  "key3": "K5GHSimat5NBfXPdUtRUy4r4wm1kreBvstYwqvvaAF9JHVkm4hXqj8weC5tEKZY3y2XfhK7EQSdux8d5gsXT1MM",
  "key4": "muHF46YaqNCKPCDpLv8wmmoSAvF1VtmN99Yz3yrbTyn63QgYJdRYhWCm1rravso86GzJGfZ4Y8vErZYoWLuqES2",
  "key5": "5UTiFMEpbENKQSgkrnNf8cygqWSjtYQgNoxpq18p97Yz7oehPp1PAMzN6kHF8mbb5MwPhoDyCpD3p9PAAA43Xtov",
  "key6": "2xmkZLqEMrSWdxsbNLGtoYdykCQR8vuS5Yyo61E1kadBPbckhZsARzb8AjP2Hhhq48hqUQ1NYqAwmHao2VgV4X7v",
  "key7": "5sKw6u2S1jcCexZX6eeTtY54QxoffKzXJPw8zTTHs7FkAtmYUrJFCwokAwq43zARBtxMob3NTqRm6Hc8VFRf9W2T",
  "key8": "2N1ZHRpcZAtEyNSNC5QvJ7uUTHiRHAVLHw2mx1MsnavW2dXT25HVPkohvD8SzaRCn3KoxoFwVMhJhssiEZgsSooE",
  "key9": "62d5fZyWRUezKQFaeMV6YUSsUKS2te8J5CN8Z8XCaD9A7UCpQCZUqDbvxr6KcGoP2VLFxgxy4fkob67Xr9sYm2Ft",
  "key10": "3NVMYdocF7fvx5E7hwUuLbLoYGe6vDJ7CCkHEFKAkqdNU1fiErCaLzda1vMmG5REdRbHh5jVsBfU2iBhQ2FtmvWv",
  "key11": "3jpvWQjYg2EhmYVFKBkQE9KNZYvtieBzXRLh8nbgBtp5jWTYrYEEcwbszHfvNXB9JYRXRXJexqdeAcE9dxrwWrmR",
  "key12": "2MXesyYH8N15y2aYANoxbZEngVxaEpeMVSuSfWpR2dkMUfsSkK4R4h3WLZvg4giUEJCGHDGcdYkU7nTSex2QqH5C",
  "key13": "3p6EH5X2FprTpxWrgrPYo2enPNsDhTPtPKnZ1sbSKcUgaU3NZQNRYuWMzZ4nZYBeLYQ2Ntz2KK4c1wUukjapBi77",
  "key14": "4Y2UwRZaPVhwjxTcSac1pN94zUUyYLzxjo8XfSwy2nPb8H1hvV6r55GT6dF9bT87HqoJQL954G4N2X76qXpatB5S",
  "key15": "iH7HsfPFJwEtHvuBJ4hMx877iWix3Ah8aMdFUbDCfy2aHxWGrA9QHuUFTagoH4eSnwrqp8rwhYmVeaJFewo89f7",
  "key16": "3YuzLGLjMKAV2id6dLfHz13rMDPuNyFpBbf2FdYiYR1CSRkxD1hoJJHfo8h6JSH8VALn1sqHz4BjFVZzQpfj9PGf",
  "key17": "2dEPMfnwk9bqUMuMePHnNbhY7mQhris36YqEHw4hQWt2TVvY5H3C6vDeYASNCMqkQNBJVZGRFfTnXVLgAhiqhZNj",
  "key18": "66qBFSW21k4P3NbLcCPEBge6A1ktf1L985grY9ewWfiAce3QrWJkM15u1K3oN3QGMEhAu9QNT3LtJwHCoTLMJ7Kr",
  "key19": "5YBXHyFfyAJprmNVe8xvgcvMDUZL9ZUekjzGPc8M5WXhkUT51QkMT86m16nK8DDm7jSNpX62nDek9rUxziZfHAXN",
  "key20": "5w58D1NAX9S8qTmHsmbQj6TRfWkcYtfGWsfpRuMEk3w7g7xHMSVDokooWtx8YPhmHTCyjVewP8HTt9wKYymUVSzV",
  "key21": "anNYbVeL1jvvTYo2eqF6Fc8o5iAvZa6XrpYBktPUgAPSmUdUFeCsq7Pq4jhtk7ccCZ8mTNwpKY2WHZv26pyXQj6",
  "key22": "5khSBB1yy8dNMqVzhesrre3vBpVwuju94Npq7VLCAJC44aGnrGfUJaGYJwno1oxZdg3iuYiAjj3vNqFUyHhkttaz",
  "key23": "28aTLgyuVg8bm95oPjjTEcN4GWdCBDu898ivoHsCcWxd361a6DBTEZJ9KNcvGMNMDyVADz5sWWgp2KpTLt2x2ZeD",
  "key24": "3i4emjKnPpQRfLdVXMQb4s7PjezzCsT4zVo3Bbp8ceabTAfZ7uwuNVqV2akujARot45JneAhjZTayJJWaFqgB961",
  "key25": "4bDHUfD1pJxNKTYNpt6qvdW623XXQLgaEopp2SuCcTyZer4EQrgS1EfXkZK8YazB6Jf5bExAVMai2uekHDnPVzNE",
  "key26": "2AQriW1NHjDmXEeH25Uw51qZXAWsCQ1gyZL21RnGkqpNZLnF2UVAWykEPr9eSnWAuN71vDob197w39FAQxZU1KfQ",
  "key27": "nHpqoktkSr67hhn1Uac9DiMVjHQVsgEJyHq7XGuDd1te8zh4KTLaJwpC3voD7mWobggfL1j9JaDi37XkMQurm4r",
  "key28": "5BAhFD1XnmcdSD2fyeZB3LmKveayYhj4bL7qGFP89nzCsLKAyEqsMSV8xpjKwR631cYdxB3KGqRrPBSidcyUNfLF"
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
