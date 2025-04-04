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
    "2X9qZjA4SExBDBf49H7E6Y8k3jaFW1zCLKh6XPPAnLo5gRmgdfAM5z97T78DrDfoiBbs6FD4vwNRYmGbn4RReMgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D3BuKwhBX8KXGhJDvS2oPXhd13c364G3qkKTKci9vXNs8XerpQNCi7AKMbgPL1FSUMDK6pJRXG7iTEwGEKaLgdk",
  "key1": "22f3Yf1f7s746KaYikYx3vGxtatT4SQd1pRqgrFSL5N2A8RvkxieXqPJDJzbZtuvciJEwrMpjCTCBHy5T7HHrPLa",
  "key2": "5g6skBtUaFpqcV45roiBbA4rgo3BQJENUm65yCxqafREJUcVL66teNomgk3nTzzB3cKSDnSanSwP2Xuvks1czMvb",
  "key3": "GG2ziPv46SqeDJi468XQjSzgbQqgQ4r4mpgxc9dSgfLWG8rNsuJxVFBwpUYhikw5i2TQuPxLXWe22fhhCkrW2fY",
  "key4": "28L3P9BjrjnjADkNaEzzES8kYa3AJNY2S3JemjeGBpuo4EH5AeSt3crm4v7cxGW3kQkTwRn6krTvXcNvgH3Lc8RA",
  "key5": "jZjdewd2ep4SEqhX979RNsmJtrAvgro4JUYKF6HP5SXvKccbBrpLuh7yPCaXVLBZQdPsx12BXrAP9CbGpM2bZGh",
  "key6": "p5yLa1RPk5KuhbfQ4QuLC4aWpWjGLqs2DMgLCWMWBRpFo71TuLYbm28doJhhZPKVaJA8eLyLMnUVyWfCakmYPq6",
  "key7": "3vvxhyyxKnKkat4ekSV7vhx4LnoEQVpy5sYQKgdyeKNqgdtmQkouFAduSxcLLjbXfoK2FzGTKyKN5buj33xMoisz",
  "key8": "3dDjykiKkWKe7q4a8bbxba6uFq1SAQyr857NYjJeC3qPQzkDnRfZkhv8PMgTSzv5LpComkJhpYR4n8zqZydqV9Gm",
  "key9": "4gseaDva6E9G2oiGUbMg2mxfKbXKSiPt1wVrqWpgjYXpEhCDQyzvtfxg5HyNNx5YqMxuEhGbZx9g1QoVL3Zkj3j5",
  "key10": "39TMsjsPmqAhBpukURzKptmcGP6oqUzDFuXx2aRzbhftupg2o1NpuprKfRpYqU4HgknhBvZV3EjwWY3upAacQEYE",
  "key11": "4LvjLvEt4bhAu9XVdTv8EtGkEdXasNyaz7C5UMB8V2WrrKtqGzqtVmi4SxhVJxYeEcaUnvFUvRTbesJi3iC3zQY5",
  "key12": "4C1qo3pEVb2X5oakVrmNbBCBGu3wuruvjCWAwgVv4hDyp9qVF64shxswHfgdrzyRKqUHVz6XvZ6DVLQfTwCXMZyo",
  "key13": "24YmtV6Msnf3niC4yBEFwJqxvS5MpeodkSKVJrPStxVCccL5jwUuecB6913oDxBox44pwqew3DZ8a71HTnTcyTYR",
  "key14": "66QGzjip2FsvfbRi4Q1MFQRUkrYca5BQxT1WWNeWTL8THX6HCxKtqhYQRyScVtGS39XXg8UbqZtyJS96LS4Av351",
  "key15": "omXoAmGEA6mPg3mtSF1zut5anrjW4wRPXeZhzKniBZZbdxYZsWkkuaQq5duRw6EqrPofBbfcfDjjD1qHxHXKxg8",
  "key16": "5d2FFpCjBUameUQf26cgmqhYywNwgEA9qFNVZ3mCHQrKdV67ivyf7f2oiVzDGRg13Ys1wnDwfdZuA6FLnjZudfc8",
  "key17": "62Y4Y1EB5WLdS1feKrYRHQHhixYM3mvfgdSL3Khf8HadycRHMHzmGPBSJeZBi5VGq9o5Rgpn4jiCgxg5NiDuuFix",
  "key18": "4P6YEXmq2uaYCCBsk51Li7upTfzmQUFD8c39WZL9M9AV1pjnyBuF75q5FNXL3HNAQ3U54V1HTaKzssk52Ttd4aJV",
  "key19": "562YG43oKsu83k2UwaxETNSynD1YFaTdhXG1XYmJpvhqqKcyPk6Xyt3a1TSUj69eoQdPXRXsTYEJaqRyURnCdhJC",
  "key20": "5mkpeErxTssumiFZpixcjVgU7eHTzYfetDtBk7LYKBBy6VDP5c5RyV9E8uLYcTBnjozkUMrmpZnA7ungd2pnSFqd",
  "key21": "4GaTtv2giVfGB4WCVwNT88KazJZqyCrcBDW8FyZnEMzE7vYcLC9Um1VTAPYPccfGx6oc4cEikFDe7AsarHgNHZAN",
  "key22": "53Zzid8Vfj4RsgwP2NVpAZMnPbuueuVsnuEyhTEkYJQB9ELEgM1oHAxp1GM9knk7kWtexNHe7hzucZ8yPt2WQHWy",
  "key23": "iicHc2fep8VEFCaAYV14d9XJqFnhUvmNZba7T1rdfaoSipRcQ9sAbtKU5ccdBymgaqr3Ah5sQAftYP2fAQ9rWB8",
  "key24": "3hHuJbMoZFw191LguLdU6WWjwnrAfvcyvFBmRLaE1pQE6fpoCivH7CcPk1VhUrvAVx1jjhcug6kRXCL4zvkt5xtd",
  "key25": "3ZbDggEMsLzSawQvF2KSE3PLjkWVqdD1UWmHN5UBbYcqopYPpbyLaXd9MVaiSCa9gVxkTjhvfPzwes6GR7VSutMC",
  "key26": "3BLgjYFmC2WGkHSLjoQw6TbEob8umhFjKLidtHMrScJLpRXcSmMeVyJKudmEb4MVzWcVb5bi6jUajNnow5ARj2SL",
  "key27": "iHvmHjYaKD3u1jPNhry4pqLJahHsAA6UYbYUYNtt1yJ6MqzHrexoV1iSobmgCkzBGzM9QqQVWUNhMjE5zDAiFRJ",
  "key28": "3iwRBgABs4zf1V93E8TcwgE3db1DF2YWCm7mWdGRWfYSAbEdghjiXWz5mTEtFyur9YsUgL6gpJKTGMBdTK5YBv2n",
  "key29": "SfDXQmMgiuY7ae2kJBydS4BJxMddiArN7RGEimu9pdoPBSDJ8bu7vUUgdc2w1uQEJvPQDkenqisD4cnTRe2kojw",
  "key30": "33P72FHUyQMBmVMT5mtd7RnFtrn1BUL4yhBvKuJDvnzH3A4cPkMQLj6vKokknBJdbmoNRwYH9y83oQM8gFP9eDf7",
  "key31": "seKGjmA2nm3pWVSX3CyjPBrmkQbVtGnPwX42gAyocAWkNnSxNfQWd4fzBxZaxaBtQpe5VV1bac9AqrqjBUBsvmS",
  "key32": "3zpc2eVmro7fPh71L3ZJQKCCNihdcZ7LbcUpiCgGY4SHGfjJSfWuFWMZSAWqN4vroQNNLWAscNi6kH2PdvVEt6sE",
  "key33": "37j4tbH8MhjAdjECBtkKseNJDJZyHnc3WLseSg1MaE4c64R1MMCbyXLosdGFpRszS2ZAFXXiy2svdPHUoZkv6c9h",
  "key34": "3BcQbRyE34eh7Pqt2EAJFiLPKNiYjJqg24Rh3KfUk1nFCpWaeFStXp9dpmzjeDQMvJ9Livx7Jr7mbxMH4kMcVF9H",
  "key35": "2Df7iRrgWQ7L54Ura2tApixcu1X3LkJxEz49Rq93RdkHNWiqcN9de1tGj9pExgYns9Veh8ky6cUQAVF9YAeiEvon",
  "key36": "JhiDusDqRX7pL7yBTQT9YrwgYpo7vssmZaF7e3sjngejqd34nhyWaZWN2Bd8FqjvhDL175KP9R63fovzmshdrkK",
  "key37": "3oaqnGX1nk3A5afcFtxEMvwsirHFBUwBmerabr2hTTmcqQUKMe3SqFLC7UVx3LHkWJTkmaMfwET5utTWFGeCK41r",
  "key38": "5vrLg289YGHTUDVRgXhYZbLNAbWNr1BLCcmKUcxFcwp2eLKgqkUHbUwWeR1BcruLdXsmox8a81X3LEtPdAyFFoLG",
  "key39": "2xkXc5ZDypoqqDm6v3R4jzckUMap73j7V86ayx5CAmTrvpu1AGQENybftCW3cnSga4fQ9eVKah4bttEWUoCJqxjC",
  "key40": "2btps1J95MHRNk2zhGDg86NwRcAcuUWV8SBGVe1RFR1nwobfeq24Ja5rF9WRzD7Fc8KUxpQpk8CkyBqxxCfiX7Au",
  "key41": "59X317xWY3Rw63EeSLf3NQgK86Lsv8SWtUdvGWCmA5QAwd8z3DPJp7CXxuJuWAYF3CiixsH55rhCnp7wwBDWAmZ5"
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
