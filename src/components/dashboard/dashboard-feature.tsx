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
    "58aiMPUSRbkTw79aLeNs9YQwdZHM72GnV87KymoyqxkKr2JfiTbBBhc45pD1Ad7cUYvG2KHjq4m8uVycagVncx2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23cDmXJfyzENJTbdeNonMPd3KPKN4qqBhLK9wGkNNxGg6h5DLvqTMWEQopqEUSajGp5pUSEpVWmX3Un9Aye7YyBJ",
  "key1": "3xMqPF1of3g1g9tiD7UGnVpsxmKTpz7Ww5MJWuouUBTTSGUJ2bLW7s7xr7nTsrpp6aY15WduarP93gxwHdo9dAzp",
  "key2": "2HbCg13nYVYZSaxghmKdR87LsZUV2THD2r7zTtPZgEhrMVmXJ7ZfxquwFUR6aKDUG5dQu8bNaxDzUPB2MLkgjthv",
  "key3": "2Zsy81bMB1SmMTspdS47ZshFoFcFS2ApbC4Qe4oMwVaquk7KcoqRKBLJ6tCGivFxKb2GbpxCtcFRectbVRf8gqs8",
  "key4": "2jipuEy6FfB4ZtQp96kGZBcVs6uwfts7URR4mVKsM6uQLy53NgexpwKxrgSnHHtsoS1LD4AUExnmJieub3MXA326",
  "key5": "57rkgmvrwSjSSqKs1pyNdpGwQ2WFLDHuKi1Ref75S3fZmK6HkTaUQVYC5ZRs4JoZPsUFVd3HSQkXNmNdFhBJ2CMX",
  "key6": "beCAc6VeHFMimbQwPYFUXhw3X5VrPTJSuhr12iiDU3AcVGjLdMzhFV6cFRuAkcH5UV28SLhjJ2GrEpKVbTNUhng",
  "key7": "2rEQ2arJFBTtPZoeQVoLvteR7BAJk2pFXqto6p8J9q8eaNuuC72AjrHnhMqQiw8AqP3E5cWeDAuRybc9U8ADWKVV",
  "key8": "42wrrHNU5ZiZ8kQ3KLbwkqzQnkTfyCB5eUJ2QqnhZYp7bfa9CpGJQLYQ9YuQ5SBFa2Q3FmxAGA8eF148xuZcLiqs",
  "key9": "4mmbozKeXPJKAgyDefKv93gKxrxQXHAzwe9x4WbXtP2663ddi8j28LJHqmQvPHburzn5e91qND42emmRcHWsjxNz",
  "key10": "2Sjd78HrYuo4Xc29SySEbJDqscAKKyLP5yii4C7T2akVZ7W6PrX2Ab6QGwgS1qvqJ9pQJwbRnHt7F2kjjp5PtEgN",
  "key11": "31QFHsL8xTtmNJnDRDkdkGBa9N5e3iEoRtzRLNep3HzbadVsbHH2s6VQ8YQnGfaFmYY8xrwweJcmYETDPtiL72dr",
  "key12": "3efyoSMgdHf3v9Hd6iH3eB8jsauVaHPvSkgudjkqFzaNNPrpb1mGSQ6DKSzDChUaqtcvkjzbVNQiA2AoBkPcmqRi",
  "key13": "3Cg8oaCwUwwcVnG8wJ7J3QndRm3yL8NTviNhSiR6RhZ4zrhNmjbcDMiWM5gFHCc9qasEwGGZvZQTS4K5kjyG48ga",
  "key14": "ugHCfnoWHqke2GdvR32kqRLH1LDhmMJzaD3HMM2Xa892jGK2mwepKv7qwYM43Jais37wDZ26sDScrZqd5CUj1SV",
  "key15": "2nFyad1fSCcpRKYGtPEuXpokNEhWjdhHSn9gfAEhBwn91TEgLCnheBXo4nhEa8A2eztppQPzfrpNrZuyWvJXJ7dx",
  "key16": "23LeESRt3mSK4sM32BJoKNXd2MqsBwJxEfTzchy5eCXqkTqWyE7bNvZyoacv7os9RoFsdn5UiMnJtKkCoint3Uog",
  "key17": "2tDhYk8bzoxuweEYAHztmz2eeaCLUF2bzmVq4Ko98ZJUHJeprbEme5pNEgWrYMv9HGJy94NALYbLTB7LFSEUXvvj",
  "key18": "5LCN3csyckiS3K8VVbTHMk3YFbNUWzUwgLtxKrmD7wU9ju5FuKBNtsWD1MSqxAhSAbtS2GzRkxW8NbZtLR6Tvkgp",
  "key19": "5QAr716KiEnsZoARWZvC2YL7FxbJjBKcN8rAYMN2VEX1xwQx3ZtEgDDSe2XGW6mna6cuqqXriSTtEQdxhyBBFqDi",
  "key20": "5uV3xsruGaK9SANyBiYHuRhKkeaTaUiLJfxZ2yne8JDjfzp5FdvtTPXR18BP6FB4rXyrYbfNeG6qcQNwPqXaRHpK",
  "key21": "64oJnfBzk9aVRfVzsNPKPxAixHdiNrPVU2Ve314UVjSVnwTpNu3h63QPppRmAkBVxhU7vVLar4BdmwdbH1fkY9jn",
  "key22": "5bAfjsMDAeTb4JhUa3i3izmhbsZPEt1K4jiW3iVR7XX1YdxezgJx2jjeFFzmNePGR6T6dMk9XhA7mRw1mb1iW5Sr",
  "key23": "4Za83TAFyd8nzUgk7HqbKjiHpcsi6ooALw4q8gUUrYqCdo296zaJjE4UYGmtavfSqHXK3hgSmCH23x1VjgTKPWEA",
  "key24": "pG4GhEsP73gaLW5vDGzHe7RZumUkeJdgRJTtDq9QSitzQUzhZe1W4qub4rPgGnq59cAafZcbTU54ehxU4XGa5wk",
  "key25": "4Lvad9WPEhpTyPthSYu1KExZWRm1m9tTdr9qpTnM5rneVvK7NTPaEuJimT1FKBw25F6vk33uLtn4yb8RhmuUbLCV",
  "key26": "5ufoo6pLrZoCFs9pWWhwm3Mvv5rdoWdRoq1AYXqDYhPBxc8W422VcnsxLDrvc7tUXRsWAuuGpDNyEW1ecDTMmNfF",
  "key27": "EppLQpE4LfHgnV65XzQgKk8hnjo4Ud2QXmt5PqaaZHjwo3ge1nkVgD9GiR4xhLu5BZFimLzxZaDT4GWmwYuJTQX",
  "key28": "VXxA4Qsz81kiciCvqnDc4GdiWivA6UrRUYG4HnJFrVtC2GMfbxrhPHfk1WxVxct9NuSrjzVnkqYM3gdgoPV4F9d",
  "key29": "4bexRx56pNhYB5GgmtGCU8pKKRWmEgkFaT9DRBvLzkKyYCNcDrstPBgmei6pALEpC8QGPRHV3Sici5UXxjxYczp",
  "key30": "5r67pUDcVSHVyYfLViur2CWAneDjhWCxxGeK94TBPGYxVv1fTuiLDuuuA88Do8gAd61jJ4KuMFacWpxLM5Hqecwb",
  "key31": "3dGRPYp3MxKSmvSvNWjfgv5HvhCSqqPyB3enEAsTZPjYsgmMGLiZzFcqqtZ1cAfNf1yU5ZeRESgmPkz5653anjT6",
  "key32": "2j53AVT6AYhjzbTHEztG1WUwC1dYUAHnzCNZULqJ3s3PnqffJB6Vvzr3ME2JuCfszitkKpETex5fXewXpJkzSwNE"
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
