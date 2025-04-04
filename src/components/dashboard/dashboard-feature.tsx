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
    "4irP8jsV6wSk4H8UDkPXfAHcKEsAZYxQHdNpHZrUuxm5DZCM5Si6pxzCcmdPQPXTiQXi7pXSzhb7TdAAmNnBJ7NW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M8N8xLiHCN5ZK9BGK4B4p86yQKdeRDDiBsxpNzvbLBXM1cfz8TryuUyZSAcpCbAb1inJYVs78DMXn7ZS527bMDx",
  "key1": "2vmiLUyspbKZh86cFBxEnVZdAmRDsuTSG2Y3UBS19z1zMPzi6Wjy2xAtik2shHezLpcDzQP7BYrdACBQPbMmmoj6",
  "key2": "3awqQdjjRvoV8YqQi3cthzht2w9RbCp2UpmH5gLhwuqFigr3Mkwr3xzEt93zErXR6Uo7NS3DRfmwGGQDAyHgGopC",
  "key3": "RTgBBUppdNsQntQ531Qpgy8uVwpvBPDjLxauugeVZG2JkjsDbLxZkXfaBgbTjMn7DuRF5ghYgHXsixDH5UCz9Gr",
  "key4": "v3nZsFvNEQTHvpjbsvFBxyUCTh4aNScvQGndXwxsMXtzbTMvcmRGdyeftHvjr7eXX56k5twRDhvKFvTqKYiFhSy",
  "key5": "2wJ2HARKgnSknCxpNm5ASVaCeUexTQw8VwJuo41zMtABmdYpwoy7MgSGXMDABMCvE33NaLUtiGG44zGB9s1zMpqQ",
  "key6": "3LtSgUpQYDv3rydTq6gsAq4YbU5WyfGyWkKdTGWpQ4SUdEFmHyhtnLhmQTDp8zabuppsQZxJscP9YqyiX5NG3QUT",
  "key7": "Pnomr26hbQExGWBRKRhHdLf1HgH7Nbk4tbUhT5nXrXGb8v8xJUvzmaiUNYPmxyAWRnd159H5L2E79xpVb49HNv2",
  "key8": "2g4ZLYWrcrFB9gKDCs7F9W9cDPAPtfUdMFE6EkAniiuScYbCZNCj6P7mcVkS145QEMmcjNCMZYDvbDqM7MK7Urs4",
  "key9": "ADp4AxN1SrXEwVSkkqkcjz7Xcz4qJiF1fF88GYVrkh7fEQMRuKTRxWQbsM3fdBAYwGdarNQeFkqNtXhN7swHTXZ",
  "key10": "3KgD8TRcmxbEajzFyEhqgCynR1Gi9WrJAPtttVkASDjbHD1UfvDzoMShA1fbp7Qh8JBcNbK3GyBMb8A7cztcj2Tx",
  "key11": "5xSsjJPkTrkPPDkWDNpyNLdjiMXt1LU9E3gLuMEVz4ZLY62kHkMk7vsDNPCHGediGxxwz2bN1vMEksAUocaTgq9E",
  "key12": "QBZ3pazFU1vhKtmR3actf6dbca8ZFGrTLU1DSQN26bkL38zrrYVErDnauzaUP6wzpCaLEfaKpYJ2tygdJp5SFp8",
  "key13": "4kfXL44KsSNww6ySQUtUigNc2PcwTQz2Jky2WF1ppoNLMRaw9T3KLBfTvVAykxrjFebZHBWS1UvNopzEoRkns1E",
  "key14": "5j572kJM8AB12qJf4Ka5w5Eestmzk5e8rdaxaAa76TzLfjJKR7rxuprh5GqpBo81pzvyhpMLYRWcfHa5ihBGGm6N",
  "key15": "5nKneZNRFwBuSSKb2qHbmQMeQ4K3TkwkhTajKkVYw8X3xKVEDrXDV91C2en7DRSSZpEjSCW2YwuN21tbhJBVxStr",
  "key16": "4VKuMtehCsUN6GFAwY33VHSjNCovVecvtayCG7wGHbbBDFjmGJpJb147QUQzgMpgJLrdN5WmnKicvR1PW3ytquyM",
  "key17": "aUSTXwbyg9HGQ2ef9eaGJzif6W7txAFRLjkN6TSB44TbWvApnxch6E8qFnYK71sUgyepEaL2yx6JJaDnWvue1Uy",
  "key18": "5o8iLNSuRMitSEPXTWSPQCvu3tB9ZQhGjhiNjUDeZAomxKhC8BhV85VEG9A7f5Jkn6hhmxgoYF9PK1fuUGqYcC3E",
  "key19": "MRi3Y5MXuK5Rda8NGTY5m6r7eT3gwW9KmuCTqmo41hHgxefw6uheSMXcuZdj3B9k3GncQj25DG8VNPghgirhHeR",
  "key20": "5KUYHUHHWKN3u19VZDui1fDNH7qmp1n4cmD6H28K6eq2d43oVGuESFNJpLb6wmzWV5AgQz8T5TTdNsD93i1mFGzz",
  "key21": "5fZRVcArGNfors6GoU96YuUw5PnJztA4D8npabh2sn3y7Bs3BPc1yPCgRsiArB58wu7KQzX18FBkR7tP5eSJhvDU",
  "key22": "4GY6WqxLiSaBgag1WxDPTZtbb548R3y6wcHbUyaXf1S7eyB1FgAjG6mQNuuCGWoCbRUe96G1Ss7mxPXjNLdUeyXv",
  "key23": "58H5qjfZMUD6dnVjKfuGoHhpJ2TPo8dji8hg4Tmi8FzEF7ZTBfDAo2pNzVZUkXt48AoqEz8E6K9txCys9zLnbbS3",
  "key24": "475kmiGGDFL3cEdydySnChRiPdpNSzzxfm4oqpcbGXN3YSo9RBSo87xXGjBCV1SMEU5jfY2o1FvDx4yTUJ2PvGAX",
  "key25": "4YCotNy2q9L6EvNvyPTyFu1b9SEr3R4DEkpT528kUFyaNcPv2YQjEdhx17suvL7cNViUN3xhS7X6tkiGiX3ppM5C",
  "key26": "51SQaAQLczFRDPuQW5doRgScacY2Ay5mKe3Q8DY8szafRU418Dhf8qrTQEeNmtKokbBzNwyvhy2vWEeKdov9VNdc",
  "key27": "4RuKnV9mFTw9HK9yvWBTjD6Vsg6kSBE8JR9J1684gxYJpzurbgS1QQnPj7dkqVVibG4RGs2XCAsuesPQBqMXhmDG",
  "key28": "54x7Kp5wTr7KDV5oGWkN1vLnEv8MQcvYiLu6CQezsTb14tNG9z1gzZXYXv1T123TniHKLhZk8WMHE5cqNkB7dVSs",
  "key29": "5L4zXkFjjrmEfrRZCeC4wpLotRM3itxVZups1WooHaoEn22izXy169GnZvNfzzXC6zwBk3JFSr3wEtPfWZVjn3i1",
  "key30": "3qi1tPv9DvgamjVN6GuuNkpEQgBwDKs8RYWGAke4oPLBUByfm6aQLoTuJ4bfyHUEeaGcbu42hTbBhpyg1zpy9vWo",
  "key31": "2VM98qTzbys3pFmL6ToHUeUv6HDdc4cSZHPhB6uMBZ1mAdQidqS3NrCq8DrcNC2SraovZgLzjF2227yw5tdWbagx",
  "key32": "5qAsZF7jyPqnshYS1K8obLzocxy1EWpjvmQ85czzcRTiCNpRxP8du198WUPKzQWPin77NWoJS5D9jUxD1xU3Sx5x",
  "key33": "5MRTp2v5hwC3TK2R2KbCuSyoU3eddQBL7okQgsmFvigPBguUorvSjc9NPchDSDHknsMwQ8V9tDRdvR4KfaNGw2e4",
  "key34": "2ebcgqbXv5h6kuTdtkRdLQqXnVaSEdaUgEXLhdm4iuJ8q7w2dsJEFNUx2Mqoe87ssoJ69CtRvYgVFFjU7KLG7gBy",
  "key35": "3cvXuSxD6RtAZ4GKJ8hb6YtRAowUXsmsVGbVKm3otYGMN6FTbPXPXp2PQpZgr3kqcvhEkqp6pk61jEciBSYL6xnP",
  "key36": "3DWzyv9SrUV4QYGZigiqZg9bbjKQKjFdUm6pna3FP9TE8dABdDcy3aBqxiBLYeXVeKkRbsmZEVSJgc7YnZNULJtR",
  "key37": "5Wbz5CrKLYcwYdVk93fznvtZJipXiPYR43EVc5kJTrQ53LC54hANkEwYnA8KsRRdPUMEPBUwLSFTRZiS4ZjKSAfz"
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
