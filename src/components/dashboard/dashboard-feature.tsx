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
    "2xazVgTZ1zrFyHkHWW55idffBbeHQ6CxXzdXvCUNvJw4YeFwVvtkKj67ikkLvn5wSfGR27sbM23SbDtjfEdXXpFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T2kC2yButJoWknHUBMa6TymHXXs2sFEMAuPHSdp1p144wjuQSzL5YCtSHvdNNeDSfQUHkPctFGxjVXVGHLVnAiU",
  "key1": "aj6MK4GDDafW9dAoMznTANy9ETMkztfgus7Zr7w85VKfhsjKodE6suw3QiFHuiP86Y5x6qCxxXEQytvLeWUQugi",
  "key2": "5kyHGtSTJsxu7YshEzbWExsS3kf1zX65NHdGx9cwxhb2PQcFEj6LcnNvYFDMQcEFsCcbW1dYsxF45givoBLRK1iC",
  "key3": "5jruHpNpnuwpj3WLsBKdhCnLYYdaYJZjzNdA5GPL8rHh6UPcoWM41Dncsaanowy92FJ2akCyw5PPCNjYpLxDFK9T",
  "key4": "uLGfwMkpCcabLe6ibS9u1E69DSwwhU9CkuTzMToVMWydvHoyuNGMAMvpDpB7GamxHmy9Fu4w6ard87sknnSxeHi",
  "key5": "4ncBnB1MDrgdHEKfbGHLF8wkJjuYgScCEPhhSQgkpcC9gzkkGrmAGgkESw5X5yqVKnYwYGbodGfT4UeSEU6Qovi1",
  "key6": "27pke7i6mVECbhDzjehX8GxmLvWVZmZap58gqHnPD6DhYo2GDp4RkXKrsbh9rRFpbetGok5enGEbdzQ3PU2A3uxA",
  "key7": "2bBodhoa4vDwxmfKr3pXpRQgHRmxh6Zk7yB741Y5KyeruzKkm4ZDx5QJUJGiKwR8xuehGSCMkR1c2oyBSF6AsW7s",
  "key8": "3xmYVPmBRivTCTk9kSVwEKmT4n4vdws7G8DheHCgdi2hA6mk7aVKgiDwR7T6dc4PKSM296bP943x7zySKxUtrqGh",
  "key9": "Hf5cFKWp5bC8YpcoYSeDYYJawn7JapwaDTovTmZd4NfeMgyZpoH91Dyw7HRAz5CLCvjSxqGzc4QvkrXHN9Gq3Jt",
  "key10": "JhrgdZVvV5FzgMWagDMcEwMHQScXkwAaZvPtHGcCyEdZLq5rXak3utgEda3r8L6KvdSvqM63zUSF39LS3ZN3qAd",
  "key11": "4uqPJpkaedn756wfcJ1S8t3bb29ae6qyC94ieqSZf1GpvE1Jfh1tV5sCoQ9tsQBMNzxR1vXiPsNxAqBL3sfpEduJ",
  "key12": "4K4fs7odVDbagq1ChEhpsB1BcyTkg4UezaJd3WSd8sNGZHHRaKaVJnyZofXDQayJjYwgVKfmnRW2kxwzLAjyc4FF",
  "key13": "EwkQnDgYcTbK3QBriawtgQ8nxXbNH1bwXZzqWfV5LhGB3fuKFJStAS4LQ8t1QTpGV5sZ3BFKf8pP1QxPtYEQf1j",
  "key14": "297RPpPxSWDuEqFr2ryT19fHkwBrwoNGTuDVsQpqMDQbP7xzVFqe2xpoD1MTaKA6xTkRtnfivNh8jb5DKEFUuiui",
  "key15": "5RVWxx76So7Yq3QHQ4bdQx7bsHdCN2ZRHKk6hV5UjgRWWU6792CM9EYHY1J99StzTSaFnMmAboXxRAiDmW9dCzBj",
  "key16": "4ftZf3bgG98KR4tLvjFwya86DbpYHsTqV3cszhVXcnm6xauY36XZFYRT9x4GL4RipxHEBdAh58pAX4K9KrZ8R8Vv",
  "key17": "48svwpnoJBcwuKv4xgeFSpd5Y3ktHpfTeL2bMvxTaTpAomrFEfeix9R4rhubUj5ym5HLgW35fn67A5o8vy5jpdh1",
  "key18": "3E1jTLR3EMiqP4Mxx6J89GoWNgAPTgg223RYC4XRuHhyzCCPdaEbVA6QX4Qvmt6FZPWx5qa4CFxYZeXQzxAvn6P7",
  "key19": "5twG6KgpAf9hH4Vm4maZpVdvVENCE3z8gPdQTymRHEhFmV8ZXmBQxStuLkSDPUn1BfufqreAQUKWPBudTkHd1md2",
  "key20": "yw9KsmrZaqit8EmL1UDVAvuYrntpR7AZJyxvB16FoaVjzcFtBRVKiRvknzaVQKe8srGJyB2fDYtC65JKCvJoYjb",
  "key21": "5UcaNonnbhE8CTERuRbGY97syapWDAjESsq9NGzF14PMpWChfDQwjCREe5AJ4UdfpVsdWP5ap4rSFJGjd642gAnA",
  "key22": "3aowY3nkKRMPAn3j2cWFCkcmmxHHMgUwXr4CrCbpxGFBmyvCNmdzrzXnxAcTp3MGspWwbGCJkUZ2MiK3Si8G74Gk",
  "key23": "3GmfjxadhTX8MshkjdKpAPHsqYhJNnS614aWPzx953TH3uqF5EWYvi2ARGT34g19h7HZmMkWszBJigATm2pZn95o",
  "key24": "2bFkvcgQVo7WGxLwSGYv8CsgWuFXVLAcYxanTJUartzugesdofSM1NR3k4HCjdcwAMshAN9dDRWAdg49ZoPRAPU3",
  "key25": "EF1apBR45TmConLWyKC9TL71FARfwS4ywXvh6RLjcCqb6nH5rSeCEpFbu9to2hu9FajpXnZhzhB18B4ewMcKfs2",
  "key26": "3nkutmSG68rmuL6ukrpzXPD14HAGt3aRyLToLqjEtM8d9a2DPiB5yzoPKYa8WUy4XawNEu63SvD85zpA93C8bFKN",
  "key27": "4cMWXNkJ1thaNRxosMbCDHpxcBg6dBS1PmMi5KhBziZFLCSyP25LspkMcrZYDhJR1ogRvoHVCFVnLwS34zAp6vxD",
  "key28": "39iV5Vw8XPHxqHzzR2Ltt8Sdbe3NFqYyYKLM7CrPNitK3P1CXMfD1ZzeBuiF6QNZdNi57mFYAhhYSiJLzem9tecF"
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
