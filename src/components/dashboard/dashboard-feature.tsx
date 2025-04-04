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
    "ZfmebVenaQunBYtnsRZCvPPymF72DBA4DNLrxeiagFxV4A4wzosbRaLu8bzmzS5ScPK4bxEKNe4EweKCYYjpMfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYXJnRbG25ZkZ14fYL1eGyGucXbQkmnM2LBH71USqNmNyVAYR8zN29QvoTuSh53ncwsSRPFAynjMHZjqeCWjTWD",
  "key1": "2faQ5D6F7sK1SkuzEuRpxZGBiWLDWfpgsnwp5zpNrW7XzrRwV6QQ2AVCAzm2QN8tvmoriv8AW4pMDt753RWGj1Xn",
  "key2": "4U1eTe6i1Du2SNzUs1zyjojEkqUQtADtWmjJg4gCFu5MnqjDGA9VSDdbADSZNsN297xwQracXM9xushi5RvjGgav",
  "key3": "3jss485oJomuN9tYccKNsWMopT7ua1YPXfzxy83NuM67wMBdbnRtQ7pqUGYdCdTPq6gx1EKy7k691FRVp9u6bUpi",
  "key4": "5SLiakKfV6ZGT3zxw6TtCjNSvASPq2ZZhxgd3mRxTTURdsdgzBdPJVopcLqhhjZsUCgw8eZK2Z5ZSh2GF5snh5AS",
  "key5": "2e3ELqegtfseXCMFeyw89ms1ug4eHbY4Zq4WhHMB8FwugpP7duobac35czffjrYMn7HrLaoRMR66U5zQLSFDAFW4",
  "key6": "zbAJoFxGp1TA2KoSJND4GwwoEwSnTCSxcL1sx1nzkHQk6AqwkmEfCkd2jJfn3cJ3NpbRW1bJ1ALnhuZjT7Suj7i",
  "key7": "4F6waXW2oosg7CA5nAGvvFZKgC8Y27Y8XQ7ptu7zx9TdcFAvev77ynNa1F5etLNJwyqyJAVaSejpuANBQNF6Nscb",
  "key8": "3bgx2fc3gZ4nFVrwGQSrwrxMBJ22wuhmiy38eY94jA6aXUBHCxr5SiyMvhyxMrhgBbBrSLQer1FUzTyxMFRjwCGX",
  "key9": "22f6CLfcLuwr8eZwuYRPqXm6Fpks41GDgR5AD7GCQLifh98eEqfoFjZmUpK3yyb1BUCZYPTzhRec3VxBcPv77LnM",
  "key10": "2ccBbq2wRSRUTPBR1Htj7nGQ85Bk6kCcpCoyNuGXdfwdK1Ls6ELefiVkqPsYpxEEyzBBgYreL4m7bCBmfgEkFJe7",
  "key11": "5xu86MgiTSLq3ZPLMDYVJUdHKmko7fHk5Nq6PwzH2rtqjugwx2WqLgcUPx591cx7DDbs3w5haWEjcH8K14rCtExZ",
  "key12": "3utcz5SJrrd3xbMKckkfNrayxJ9hJXUdPuQUbYpwYGnqWumzRpeQuwW8NyqQJ3t4Rr1U9Y8WRtwmBgftH7cpdFE9",
  "key13": "2reVdYexb2Zjdjn3jbinX3dRoE7wzp9oRA39CzLbMDd3HLCzm63Po4wNFEHaCtkywrFR3PbvzLZpHhuxh3Kucrbc",
  "key14": "2uNjbkQVKh22GFuMDtmZ3UJKkwrR3fWBEXNn9NYcG8HfH5ts1Km4ME5wSoCkmcdQdrrhFjRJEuQoZRHTmZxARiTg",
  "key15": "2fxU3NFfKRa5ufsuAsVDL7GQwQSdWFyTPscHUSQrpid5RQhoRUyUDGuU5UDB3c9ncHRM72ArYcVRftE9EqzUGbh",
  "key16": "5Pj33SHWXhYzMFKKNTnSwMCztsDCeUQseigEsy6T8M1VvNFDhJV11fk8xkLm3ze21Qa3HcKqZ6ZkQm52van6tas",
  "key17": "62c4sUD74KEszjqdUdEL47KftYmhA8irGMZNRJ853P2neTcjpQPKaUhfFK1yYYX7wTsXb6vU4Pin8H6VpojNiar5",
  "key18": "5vZhbPfNFu3GGED7xWD7aU7k8fWxNecLBfToDFkn2b6NNsXBQNTpsTAxRX7f7noskJyFz24mgN5xC1HwGVV9EE5B",
  "key19": "2koy3eePZ6H7ZEGVE5xe78Nq4AqucVERoxLKNk6aSw17vTtKUCuHoScRYz71jejT9vN3FmNH2a3BDtMrCtuCVBDf",
  "key20": "5JV6QivT7nKhKrWt22n1nw6m2cLjf7hv7h1S7UGoTo1oLQFr5qTUwPh1NabXsEuHehxhLFVWEAJWPvFGVr8n2aWn",
  "key21": "2ZHCJWHzA8DuWcynNJ3DWecbhjq9krRZ1QUbFj91F9jx3eRMFPtHEnaU7nDh5xv7344guckecGXoiavmpHgmRWww",
  "key22": "2AEKUcxNzVaDVNV9xhxrMAb2ceWMqtXbeLGRcFoEcqji7oemHnBp43oKp82eVeuCsUsj4hZ5DALh6QDKZj7KLPta",
  "key23": "Yvg86VYqSMBDZSkY1PK8XMjuGwMjnpuTJSVmg26chWPAtqThY4eJ9GZjRCVcHpT1moyXVAmZU6bouwcQFqqLxJb",
  "key24": "T1pBzzSng8GViwtx9A31XsrY3i3DsmokPmxBfiBE2jff8P8QaJyyxuEkoEW5tEETvYqVFtFLmxSZnZyCixV1u4r",
  "key25": "2wTpoHyFtcfb6YTVBdx4LrBtRuW2xbDxpUfMf9yoMHA46dghnx9ZSLtAcoL8bKGFGpyUqUncpnu1jcLVz8rGNMbQ",
  "key26": "4C9pfWeKhj6fGnJQKJiu2E2pt5Jt53LdgQTEZqLDxT2swGopPN9y6TL1Q9PZTMKjoNZ8ak6aAt4iSNaDh3DBAWeR",
  "key27": "4RUcVjcAqMXX6w1vYw44EZgZveJzCp7A5eaTHzG6gM58oRqjaBBiMkWxnJu5HPpvp1KWq9LPLrVrZrfSG9wmNfM2",
  "key28": "38xjrB2JBRfHsFAEPxPXeEtcXgpPxnvmiyqQzbGNPePxWyDAadp54eAbM2Wx4Zqwm99dXHRsska6mk5sZK4XrvNv",
  "key29": "L3uTay6DErpCzA6tq941LGm8UeyG9E4f4z5qU6xzSmegEsHJ2QvPYpae33MBkR1NX9fMqpKJsPSCDisAKYZShbj",
  "key30": "4dzPNFHNs4yNpBSSjJCYRsTw2RXXxydLgMfZhshnXna1Wp1MzmUkng7qJmduxa4k12YrERiN8hpsjakzb48192Ri"
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
