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
    "3ES5U8m7142eyHcNvjtpSMxGHTEbwYM4i1eRAQgMuQv5BrSusJ8KVb1SBa9kXBEkU5gjVofYTruPNpDeXyuUmqmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zMRPZAZ8DMppLhvk9qoaesTqEBwtMvEDPrf7C5CK6CeK45GzEohQ2ZccxyBwcG6VxrBqx5jE3NRzxRYKP2wvZh4",
  "key1": "2iqM3rRxK4FBoaCLCwaqpHNJ24ppZaPoAZzFp2b6CV9Fz3GBSN5YKmhZjdDWwddbfcuEQkRaYDEVvL9AmFXXikzz",
  "key2": "4vZo6evBfumCdWerLvN8cJprvJcs1h4hh8tZecHWskRGXaWbniH4ncpXJX6hqm2Kvw4iqqk2wz793WUch7SCCUgt",
  "key3": "3ugsLs2kbyi4MsovEr2rmHFE82GeekD4SErxwwV4djcKW2c4K1dVww6Bju95aDVYM6do4t5PcXXTLzFqTdcyFsph",
  "key4": "2SqFeyhH1P54FVzQ1ckCDAa6xWDYmmvjU4GtjEnjadhiPis5VD81FFHEJPzAov3ZH5QT2xsfkZoeVzcTR6wjvVZ4",
  "key5": "3Em3dg2E4MoNptCNCPRejyPG9xnP9M9L5Kt1Ki6jV7AgKPWT5SQF5Js3v7tAsaK3wjXRtCa74Yatiyyp4T7D4P96",
  "key6": "5d9Wvv6qzRipVJVWPds1cdk3fwYf2qYPjuRig4RsVchjkgKumT5Lu92yTTDvKUV7naRKLzKkGDurtTxBBoN3z5JN",
  "key7": "3VMAWEyL66mCMRwaLbipWBqCbURLLF9hX1ZRkJB4aQuCqCHNVx3zyDnPxQ7qFnvEVxK7QMbjzfNj6aVYh9UKB9hp",
  "key8": "2btCy5K5x5gRv4YeCFccBknuZjTMA1jL2dUHZZXJkh5NAt5dhpCJG4WLqViEqQGWfg8GKCpjFsRGH7Yb7qazQBG",
  "key9": "hRykK6mtL1jKxUBvM81XpGswT2qbfSmiPitP5oa1YHeJEd98STEdWC9qPoKYPoMcUZS7Hasepy1XsGtkiNEZdbL",
  "key10": "64xsVBvJXhyr5YeF46htU5yyad9z1jaGgUvVMrYeqHFsHAyPuiUPoPJMXyMBGiRWPiytdTP3eRPaWEGBGRM3qfZY",
  "key11": "3BhsAtkVAhqPMbpbtXn6iPgSmfVSY94vhieB1wmaKBy7DnGBZB3UCevBzcmJNidMKBkHni2jhVVJKHGe9JzCkWgr",
  "key12": "2cjr9j9vqkGjdZwZuV2EirMnc7EScmgw6um2VSqEN4hg9vAnUVXJYYcph6YjHMyYT8Rs8R25QanNd3hbT42oYBey",
  "key13": "61yy6RWzPrD4N6g1N19rZLSCdFcg6yVP3pVHfFeHiqTR3hZ45SqdeVfirrfyPk7paVN3cugAzbdoLadW4295HThW",
  "key14": "2fRpM2giBrPtcgnngRXv225S7f2Jh2cuJ6Sm8CeoFG8r7wYzcZCD7BYaFBFTddJaQU2GDwt3bmTJY6Ycb1ELjhuh",
  "key15": "3aM4K9SRPUaYcCvitWeRB4fCeGGzo9WkWDadnfpKMcxzsmFMGYkhK2oBFkP6DPhGU8Q9CuSRSq6cGYxpiFEj2jzn",
  "key16": "3Y8otWSbtL8omwh6pNF5i98uW4QchUDiUfDneFGzj5hDzFFtTPAn1nqaBCPKPv5kkDHTUPSb55xBMnPLMLcCbWGN",
  "key17": "jgWALD68TZcrZXvkU6rWHqJqmGk3MoRK8pNRCn6hHs8rhQFbv4uqHKSWuZn5Mjw8Swzv6cr4MHr34hJyu2uWhhb",
  "key18": "2AjNym2xxJYYX7jq2Gk3hwsQF9U9LqQUHCtnjHpKMPTTJ6mREkUWCtCXRrCPkkAX5KRbQUMZRjoTmKCDaAqRJVC2",
  "key19": "5UQuWGfUGAfz2B545EpBdaNbzEfGeeSPH7uz2LK2ccXhMxoYEe8tWzVt4gXL7KkW3ZaAfjWR2HhRLNYJDnvLd6zR",
  "key20": "3AUAwmBKixk1nA4RFx395NtGNjQp7ZHnfaXe46SfrMCYqr9rxi6KA1wgMnXHQZXEeCGUTSvkL7ukCUb2Yo26EVFq",
  "key21": "28kaoXY8UcsCqvDuBYySmHwp44AjfQMF3jeWkUt8Xtb5kZYcPCUexMJUYXpUsb1KPUtkwfTbWEk7ar8SNn3ryVND",
  "key22": "N7C73qSZ44cFWNkjSeP1Js9owqxV3YYbtkK6edcMxgBqTLPWrUuu5YaE8wz1Fz4APWwk8W8pm272ZavuxmwWqr4",
  "key23": "tTPgwUx1uBRCHURGg47QJGzGsvhJz2jCwvFgHF5fMdcMc4CDQdi3zZkRXQrVYFMe1Vk1JvNio42dHst9fjxZ1RU",
  "key24": "62GwL6pwm1rcQcdghtB861s2b3rdtbTXhEjGaQfsmNU3s9JLRykc32Pgb8kvTDKR4MdkngcNw7vgEcVk4UJDgSFW",
  "key25": "z2uFJ6j4b8cn5GGJtfucfmLX6qv1h8xXNg4qiVM2gyossQj3XuXo9ChLdf759pjNcRNHcm3RzXujJJ7zDZ1fvKC",
  "key26": "32BUynFWmBiX6QnHfV1pjxNMTufgQthbX51RhmunCrFpSkHXmSEmZsemzBgz1ywG6GAWd6RvqZSy8svHcRR9rZXL"
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
