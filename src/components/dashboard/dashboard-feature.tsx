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
    "35pEunWM9dUFcNRKcp74kxDoMddBw6jB5s8Qi32LvyrED9XV6XGsvw7dpe51ZCA1UuNM7x41SuY3ipEWNqztuf9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w2Sq5PN3toxdxGr4e5AJUZ7UGeJzB2j6HrYZrkLJu8VrvMHgESPtLpim2SGk7rxcQS6GxB9VbziBu9SF8EUwVya",
  "key1": "TFZkwwxLnjDwrcJ3v8fJLvE72yHspL9g5kbQWE2iRJwBwuoBeUWva4jTLgfMCYBVv5xWt89jQL6Sgrj7uCSJjof",
  "key2": "gnHz3Tw2JQXH3332FaqjVt7uZgSoNDK9xEkdns4rehaDMShcrsnUiFQm77dvjR3wS6hc4VUULLFSYTLnSUKByow",
  "key3": "3v8Y8YBjyLvnEPwqsZvMiLmpiPYnJbQJvJN4V7zGMtPPf1dR2ykURYYUTeTqyyMLbGw5Hpm6J5Rojve4LKQWcKXn",
  "key4": "4hfB5a2EuGRtztBRhw8JqwDJdqNwnW2HzMFKKB6kCetQoX6ej9sGK8UZGc5ocEuDy8kfM2arS5HMy7zUcLA76pG1",
  "key5": "2gCaw25fY26zpEdbiEG34wfu16a1wApNx7zn29viZb3aqpQMsXHn4kf1sXnBDNwuFQkkdRVJupDK6cD7rTiDPugN",
  "key6": "5f75EN3xi7Gzk1jcgPpoPMHoYFzZ36HxphaqiyvbtBpiMJCKjd4R2kF8S7SnnrB9uNFBm19jRocQji54fXK1xCyq",
  "key7": "3dNZGgGBqyWpPE8zxuDEHUMBjyHeEbAd7Jn4ei67wLHzwVSoWZ3RsD8SwcfdzFEDBdUAZRukSkisxBeWMYk6ca5h",
  "key8": "5SwwFWiQ13jmLYtNX1KRE4wBMU7mVeJWkVG2aBYarERCojdDh7HijaYhexHZZPs11yLYuPuRCB3f47ofoVDeWLZF",
  "key9": "3SurRBVYxxKv3gsFuuA7QzGuFzU1xBK9knHtZQLAD4eh5J1ZGybiknmTfpx1WBqyoZqLZdmVmVBDJ3BEzfC2pSNe",
  "key10": "29Xu7LMA2pZnMy6GujMJ4PoXLF8TJgHzPL3S5YJHBybdZMJUYybpxrN1HL2kbhvHJiLC22VgLdeAPUujgX2zQ1Qm",
  "key11": "347Wi6seS5XJFoU52miAFdiVbAcxHftpRaiamNWidMi47DHSA6KoGxaw9xWGVRPDc9Ry2xmCe4auoqodEkb85aqA",
  "key12": "hWCBm3aquirTTzbW9y2JuBerp9rmU954CqGC6RQq5AZ78kK6gUJgzVbuaZFUQzU4pp13LAMvypSha8X2HKVcwm5",
  "key13": "3s3JybKvGy8JM7xjx1cbCQEk62gaqnfEaPC8oWDjm6TjMfgm2x4G5e6w4n2V1oU2VEWNGvLtDdmxtoznuZwHz3kd",
  "key14": "5af95vRbTxqyu3Ukms3cEvGCGbxqj5X4N7pr8bjMPyEVkNJpCFETvWW7akBgaDPEBJGxHZB5iJr4Bg3xsyNptYg2",
  "key15": "5RSTMQbfzzVY55ADAWm3iPfA3ERxXxafSycWLEgMXsXUiajMtN4G8gS2UABjziuKPuYaTYYPMjBHFN9CUYB83V9G",
  "key16": "2D3CKqX1pNuUDc92nP1Zq3aqCVgto246inB45UboGjLM3LgRjMXsHWAgW36yhRaJ36cey4o4HxjbEiALhu7P4w2H",
  "key17": "3nVEaRBYyHsE4aEwg553VNGJzrGENp3H9Ks5BdwkfJYfTpvgUNL929XCSLFWhBhba6RDYhB5qLmmU8JdzG1aB5G4",
  "key18": "2F6DLsE3dnXwSGdhukvka4JbZ8Z7W4vP1LPVfPe5yyo55q11g48EJ4bU9xkgo3tDso4jSMAVWXDuY3q3NKfixpqh",
  "key19": "5besPcBNuwAVpoNM3EiZH5ezgitZzace7yQiJ8EmgDMQkFG2HwTGx5eqYFdRcpAuzDi8H6Z1QLHmadzxgTRpgjCJ",
  "key20": "gQuwnXikqs7nosqBGz5a9qvNQ3Uadtce2QZUxVzkz8tLpJkM1qEJGW21qBoAEThML1juCs7kJS3tWXMDc64LotZ",
  "key21": "3h49xsyJxoMNmthhNjNeZsWoHRVeewYpDukLWDBRVnWRYNempxm95XDCFrejiJxhTfqkVthHoKoRQDfZVyMnEud9",
  "key22": "2xyr9BRN2gmn4iwiZgeRCgzBTajmBcsM4tSt8asvbh6yxA9o6wBWVpSeF8jMeTKasrsX5F9Du6Civd5RS2RmW1ui",
  "key23": "3bDXBGQH4HbFudEmk9A1QqeJhBzd3Zc4keJSYr5oDvGhB3omieynyVDgBjEzQGwejMjRGywa5HN8YupbzVdhdQpE",
  "key24": "dxXqebmQGUFvRcEdt6z3ihsE12GcwtFoy7inAXQGEv1F6F3qd3o9p9L1W2zuYUxHrHMUbZ5ZtaCX93yo8jZGa49",
  "key25": "4wuCxxDsyhv1svnUY3UTJ5mCV7HoGZiEgTuhFVAFSuxXUGjNz7VCyqmyML1Ueyw7MpCQMM1kNL15WRE7aBRmx9Qb",
  "key26": "2VwJJikH5UcCJgzCttqNqRNJsQVgsG79s9eimLn6iwRoDR6Ur8CDXmbe2uKNN9xNZBSMTaV2dGKBbdcDPYzN1VPJ",
  "key27": "4kL8ksj5zehjenqQzAUknowKgQVv4pXWKHjzYdVufJv5qpot83MoqSkHj6ywuTcjzUroctGv8RLMGR6DeYrtq9mH"
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
