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
    "4STriqXa6nV9XeLCBzbu16iWKqgvH5ekxe3hQ7XYjsUefTVptLQoqSZuyM85Jo1U6CtqtXs1sQAbbqtfiCnmkZeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ykZHwDVyKNWSE8zP76F1MjJpRFRZnnVTptkSf3onoafq42Y1tMHrDTdt6kGbf8kQypffBBj4AgCjfLea4D6XR12",
  "key1": "3LNqdeSWvwMNWfXp194Ueh1pyQQAL5cqVPorihYjJz7nRYg83CPYoFoR6KPweckpYPpkeqkveNhf61LWNtuBmf31",
  "key2": "3TjrbKrNy4iQN3qkSrUVjmzTEd8yt9wXW4jvWQLRWyocs6rmVMgSgaNvF6qVJD86zqPBarGUQrcA32TEBQYYPELB",
  "key3": "fhoKU8Jt1nWxdw1QudxqyDpNkyjXammveD6L2kZGFk59tZ9pHUcBtfJ5XS9zoB3DG81YfSzY3zfCKCmRWeFq92q",
  "key4": "2mHHKACaPHKYHM8P4HriZtpinPMdmyGo24ha9NpB2XSkepzgPUhD8Up4Vg2TNyFAqwhUGaRYfPXVStGYnE2ZTsYk",
  "key5": "4Nf95tSEvsMhiXoXYirx2oM9jPZ194GETrJBjCz2rB2sDCNMuZKiiRc15VfeqdAVLoRYHs5AqMHBueiufdVAUTFb",
  "key6": "yCCzpGP4XUWcnPpjrqqDySeaNDmzr2ok2QeysfVdhXAwe1q9SRcTSjAujsXTUvLb6DL8nRdbdNZuUdqrMCDuNpa",
  "key7": "5oUtuWb2pAZUfbnbEDCb296TYsjRNsbiG6BW6Re6fABkwtYBJUodhzxiFjrZmvnSvbn8Xv4s5AwpndXgLARQaCQG",
  "key8": "54kY4Takycn6SiNQHX2WdfGQHZuZwVddAbKPFto1Wuu1gcQmhJSTBLsQFabTeahYnuH8V6rBo9uYbKVpunTEGtU1",
  "key9": "5XvJb9YZ9ffXoFfkVfcYkqjkpqq6meUEFubDP6Qk9AE8MtcarFxrJ9K9uRodSzpzcNogwba1s4fM5pztMKdyLrnb",
  "key10": "32FqmGSg5xnVF7t1CMivhwjm9v9LzvYDjdZR7xDeTg2PdQ46egeUVdyviLuU8gSyxCFEZqep8LSRyA2yVEkM9P5X",
  "key11": "2hs8BnFKgPdkc6aNPiGucvjBhSzxF2msmWAFue3ppB6ck7DfCiNmRjzzbbSZXB469fpRj1PheQTrjsqqcEFT6bnt",
  "key12": "imuRxy8N8JK6FvPbVU7BWvCfDhGAqmFyNTiFXQiKpJThvpRNdnZcLJMq3b9ZrUH5aB5gcqbn5uqhZBgd64biMHP",
  "key13": "5AaTFB2cGNdNGof95xyN2jtWvoyEHB92PSpZ1w1U4KF94bz7CNh4HFPWuzy87TYyKqN6EdK3rbRh5jYbPA6tz1gs",
  "key14": "2bU4h5wmYpXhWVfM3ehJ1ecaMAm9Jq2UV4JpzrgGZ7QsEMNKcFjxHkNP6ZLGu6nXYjGuBJppNC7TfYkTYAky1qpB",
  "key15": "4oEGjB14Shf9mQMqfYshGDmZAfFA4AVcGYgoADqizFXei61D7QF7A5Lw57yavfCP93D9QvEBdrTvYC6qqtGCAjYf",
  "key16": "5FdCrCh1jztw45BNdYdSiMQfKbYVuPzZHdUgyBNBbMkeoLyuhLHu8HzeA3L7aG82VCd3mcbQqaHzgLtZoQMGcqot",
  "key17": "VWQzsew3sWXGujpmgPDHyDqk9t7XG3WRNFFNwDeHkW29qwEGZRKaWu7pQkyxwPjCHACaBP9W4HL7WsRzuo3TkKG",
  "key18": "3eHgbAZpsXvHT8QE5EzBXDTQw9VPh3JXS5gaJZNLQKcaftpnbE2fzZ5ydeeU3LqZhq71ag6myYNn1cw1UEET6vDi",
  "key19": "4FN4JMLQF5v1kNacrhU8HfKB5xPNoezue37M2FPUQEZQppmVdoPx8sLKMqmPPBWg5sCkFs199wXv3zBc8xj2PJXM",
  "key20": "3ycbswGcerCQoyoBCosTQTgaVy3jrgSXUfpaR4k4EmFqUopV9g1BgKiZKoK4HJg5Q46otKnWKDQLty4acNsBynPK",
  "key21": "2RXv7FNwhE1tgpMiQtPmdyYcDVvSttFz9jfwmQwwzyz9tAuHKTqmzTnfRS3WKFZkGB7vFkrAgvFcX7JF3nL11ihs",
  "key22": "J9roSCWzkttT129sY3dKdhzjtPLdCbWDirR218UUgqZSy5fuxZBeYzHh7kMzVgZK3eMBeGn2tBN5KpEUPtBajP4",
  "key23": "5y2vEggchXAEJsQEZAuSr3gDP7vZFYj85kGkmkuzrHS6Se77yZjZg6MHEnHTFXoeSKagS3rmrwaSbZAKDb6hQmPq",
  "key24": "tvRT8V9Prr2wiqbnKLoK3AYfrjVGERmUewfBu4JHu8zBocPuXp2RYBCsTTcUP4zvbqs9Tvyos7hgvpD3xSLKGSn",
  "key25": "3DuMt77wk7uTYQJwXDB43ZvXzyfGfRUf5dxFB361dCXVP6JWwFgeqXg2fRmb8XWqw97RKFcLFgSCy8gFotFZpqNP",
  "key26": "BfiC8RhbxLkn7zeYx4RRrDBXUfLgyyJd6ZkEHtAYgV2CTkD2VPJEPHMSucfLMoU4QseaBei9GjibwJotHX55Gz3",
  "key27": "2YWEDRbkGNVJsSfo3SRzBKtjZc5Db6V5CU3Ah9D1fBUmcUmu8ng2Xi2qgPre49L6E4cWdzgkoWUSysy63oKtWbkC",
  "key28": "nxZ6kTpkyZu2DrYgmj5tWP7vPVxWCobydE9RfgF2aqnX7dzB3pX6eyH2G6seMz98vj5eWw87GYhj2rDAagq88TJ",
  "key29": "3axRazs3xQSibMXS7Tnor12MCZxUgrauYHWDMHNPPpdbyCtJ7qh1Cd8rn8whW1MX6ifCPCveH6oKef8fihBUkVkF",
  "key30": "52fbPsztN1VcAvnvnvxBqgjb4PDmTjya29SZNLwfxxMe5fvXCMagR1ci7oVKnjrJJtD8zo31TbDbv8sCDC25476S",
  "key31": "4eQGAW9rHTsxz5QrhUrFfAexi9YhvaoJpyRYiUpZfS2LPgicxTzSxamwYySW8W5kTmrjgDUdeSRYHX3dyN5L3Lqd",
  "key32": "28DQ59g1UdQW6CTEfPLd1g97AF98GtSpce5bsQH6MkwQw9sG8shk2Vkvr8NihL5DqqdDRoRSVxwpGHu1sxLQS2Cd",
  "key33": "4fNRhZofiuwZtvJv8iKoazqEt1yEV29NmPeNDsefCnPfixN6ZcRMtPmFrCK7hYcsX7wX6DLgVrrTSUyyGL7NvsKL",
  "key34": "5TMMxQQW6MroLstdAxD8Ak6csTaQcQBxdUjQjupe38Jzm1uZpyaD4LQwmTRTKjHTkui8v5D2hkpxqHURcYVm6wNi",
  "key35": "44A1CyozRXe54Uch7QfkiYjAFhXTsxQh74cQvNhzL5Rm5wQEKDKK83wHXCvy74syYiGkFYxz48xJLkuQWKffbLp5",
  "key36": "3ncqMQyFS7ZVEts3SGGMb1x7vi7exDxJMsxrB5Pusht5VRKUVNM5dBceGtiF2qWEAGT61tBUs8rBne1WHfu8XHi9"
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
