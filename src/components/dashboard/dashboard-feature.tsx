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
    "5Wr6FsBR3Ewxbyj4aZ1mh4bazkWJkkJvjqeRRPGCAKW1hZBKXPSZqsa5MrejG7oCGBYzgFeYY1oUwC7VbqnupqsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x1xyuCka6AJAeRWtWennxbrvpnbqTo1ToLEa3itjDxF7YQ1WWzvpxjtCDw6oRzvqBLRdGXa5MBnbxABvinMDY9A",
  "key1": "M3JY9uvVN3cWBWm9A7QJbqmq6G3HwXmSy7fjcj2K3Nbxn2JheFF9rbmtnsTMR5whK89RJoHvjxcd8oLDQGsEdfk",
  "key2": "4abD4Bd4LyouCQws17cJthNHUheBq7xUh5vAgxVJoLb1QsCHE9ZWyRJAfMXNAPLoJ3gkU1kqCq69XhNkWA1vAivV",
  "key3": "5wpnB1FR8noJ5VQCrySaTFcu7weDmeE8NPJECutrFqLPkU95D6VwTXTQH4F5jYeA7e6vVxkvm8W3CGJL51joHcqn",
  "key4": "M9cYnMP1sRzDY3Gn4W9EHQnRkmh7ax9aqn2BeTtrJ8gcKGeUeUEzaTJVGw2LJoW1RokHc6bsjGRg7pMCgWTqjKW",
  "key5": "2eTY3Q3UisxXusrzJbtno98MkBbd3cf7WQBsGo199WnirT2pUCq8iF2F2fvvDcq725UtnZFBNu42zLMQEcJBQguL",
  "key6": "2K9yKJTnh7wJGHxwBe7WQFWjYCfJRtnbg85guj9an59NFpbYe15gYpe92tDrKtUiWZSZUgtnWqc1CQCoEnidJunp",
  "key7": "4jqiBjBsNfTCh9RmLzLyVcbVaTivL7H16Y9oLUt2qF4mh4SS64HPM2DUgq8TyQrchX9XQYfpvWopC6S44jcf1JpQ",
  "key8": "2BhmkAxEFcFgmUnJbghStmUEfDdhGTG8JXBiKrvuDfXW9HkbrThJtM2BZ4bhJKzqHn3K7d7V9fEai5c3xnAUovtR",
  "key9": "5MaifJhmHwX9h9MZxRPeTsoq6PDrAsi2Z1CmQvxmoWnhekaZPtYoscbz1P4hEjBbVmnKMu1fzsGWadtHkTnygdLy",
  "key10": "3NSMWLWuqCwNrCPyRVvk2BSzCQZMZaRDyuSDFRD3JvuL2zC5Wyi713YvoqECxJcnJpwXvg6SsL2FRKEqqi65nQuv",
  "key11": "2DK53vQtFj26xnKWbNyWmkZ6Y8ga3s4Q5EszGgMKyfwhviQUcfQpgYn4o67crst85XYuewDRJSRdtnDqf4aBdwP6",
  "key12": "21YPH3Lb23WeYvWL69dYxEVAEBubgtYiSHyTrF1L16sHA5cAy6TJptH6RsKu4MWf4YXgfjfDTds4kEmQ3EVrNm9g",
  "key13": "28mkStYStpX8nod7KTgUtAw3fS6UuNG1pAvvpMLUPaqpdEn6RnM8byPv37C4mhJDocbEiTobsAwUkD6KYzoEgCrc",
  "key14": "2toViW9CRK6CBjCNgQRiUATzyZN1RVgJY3ameMQzYpmNSzDXVExkmYDP5m3z2xJVEgh8M5Wtw5sVjbcp6TbcQCVZ",
  "key15": "2f5uRVG72SrWuvqpZ7pJ2GwWbXThKW9NgtWdzQgbhXE2hGE9C6VmagxJikSTezC4oUbu7xycmqts2rDN2hXM7iNw",
  "key16": "4tM3JhTwPrPd6zQbHY7YEBZSYYNWdTopB4g4moSHQhD9kd4TdUBETphE1PA91aFuDMiUdgD2W9LJBmbLaagqeoaG",
  "key17": "2pnFsxMtUMCeTcwM9HenyhwcXuRdzpdLGGjdoEnjxD3F2MSDCcCkxg9X42M8KDQfK7gPtPxHLaNMg7osRgJDrSVo",
  "key18": "4rUQcEkyFR4AhG6KEk88t7aDGBeaELnSTy9c4ZVyTXebDp9CdzvgnoLZpoqmgVcM6VdReAp2E172RTT1uTufmoDv",
  "key19": "3yMvYpbRrucG2oFgNuqZLYPBeBqH7Gbn97RerQm94ey8kRWBhL3G16nySWDec855uVoLmj9rzYDmUknPU61VHBiT",
  "key20": "26WEtuFTdg68fYg2W3JN5jmZM1C15FuyhSJPs9ikxRVyGCSRVY1FsE83rhJK2K91cU9AMJgte9FfM55Tvv2R7iKd",
  "key21": "32Y3fSNPXdozrTXsb9h6kXUuVJ8XppoC2jh7Z9bEhPj2XP36YpA5sTRYbC4UVuYJbSyB3BBihPpKT2FNYineb3YZ",
  "key22": "5rcbYEg1wEd5NfUW8t9eXAja8cwSiSXUHDL8epfBQM6rTRS3eeEo3JLE96H5QyyJt33mEwqFTPijAsvZqqA85NUs",
  "key23": "64C4HMpvmzie32FLVbsaiqDzpdvXNegUDtBeTM5wZm4tX4nMMNrgSx8ybWUrGm3mSfGkC6wrVBWKJRbNZLH8CFzV",
  "key24": "4a1QXNJX7DH9rUv3n1bRQXi6eWuqmVpT3bsRXsSMwwsCBZsTDkef1X1pa47sryEQFqFx5odhS6K5Mj7YeSRqP5P1",
  "key25": "4mkmsJQq638Dm2ng3WDtSTycp2Fp3mFvLyoNKfE6LQmQnEKg3vs7kjMWxaRTkzFb6BVo14gU4XLqxwWftMvFuyFK",
  "key26": "2QjTjkCzHrrUZQ4h1p35kjk3zqK6jowkxMcinjx7meoiYiUUrzmCP8pGK6M4BAfMuVqRW1uAwChjMQbRSAczkWdU",
  "key27": "5jvznhr4eKQdGNwj9EsuEYc2zzXhbQCgpycjkzk6FGktx2czHEeNNjMPoqgq58dRPYjcnw34VuKTaHJojjnQ4AYP",
  "key28": "3XDpVwyFjpoZdj5RQaUvsYHPBoT6PrAvfSavHVhRkSPwsR5mWjukchH42w4YfqLvZNFyAXj3GBqh7vwHsuGhFvDn",
  "key29": "5ass5hEr5Jau8Aqvi4mYXu85DVZYFxy3xv83rhHx4MLK8G22SXmtsPRdFaYkztYKhAVn4AoeXz5KRMbXK15VGakS",
  "key30": "3kGHPoo5dByVF7MBSdQ68JAtx2qyXfv3NxzStsFpJHVCcra2RMBikfJ2rV78JDorLkesZcSZNszosQJLZc49hU18",
  "key31": "3Ch7yVMfCfdGzYS6upA5k9CDRgaNPFevY6Q7m67chfEpSEcpnbCp4ZrfMTN98nNmDAK9PmjJtcp5GrHSupeJyiBy",
  "key32": "3sJYXhPyCjvVhBdXGCrihFXoDQi5ts74TDA9HvDR4euTN9KT29QYD4pvdbK5iH6j7kVjV6RrjFwCpRxZhEn86Tdb",
  "key33": "3smKBKtntYCw69zcV4WuicniRdRYHcoeJRzF4mJMGNVPNBTGRFYxFNN7MysvfbezKzuzZv2aF3k6SVBDYfjEGck4",
  "key34": "2JZWexkBC2YDkNFZF3J9mAqGy8tKi8fxieQtJErt4pLZ6sP5KHUvyCV6v4YtTdj7kiysGZCFXr7XkWxYxuzPMAAS",
  "key35": "5MPKCe4qq9pocRvXyULv1PHcvoSkyEvXDYKdeRnjYdb1qpmrWfZKNxSasZAPmu92jpbRvVA5dNp52V7ndsE5qbpW",
  "key36": "5hJSSGYA57tf4HHejBSbfQKPsrNX6Bd5j1oJJAuDyDMgrVaUgw1ALZq7QL5ByNzZwEz8M8CD3W9UgK1gGXpyjeA",
  "key37": "5cRJxiLiG61t3sjFyPzww8VKPo97LXbQP5gJt9mUdoiJdgyBtVzyYyBdQqPMe3rWDwdNJiB8HrXU5WUorWf7u9jD",
  "key38": "3S8cFSkxC4NTZzbwcpqPtcAwresA2kSWNR9FhvcPiuueEy1X6UBPn73ECS1NZMUqJNB7DnKgfSSeyb8YX5L8nasc",
  "key39": "XuASt3WQr7XTL1Lc8S2HrRc6vwzGfrAGT9BRum8pvtjNfbpCcUyruHFVSkxiP4mewisJS7ahXot5gKsNpa8Bzh4",
  "key40": "4i2AHZN9zxsGLsrbcHdcaaPESbm5GmhU7B2Ag5U6EqgLfgzew4rEZZSxZhvRaiM4LaEBiQNVvTBpn1CnFJykyY1Y",
  "key41": "YpzTEFEbtqHmNJWkiN456pJe94Qn9uhM3PUq2MNfAFLEH8AeUdDoxHe347v1ataCFF4LKDPc7MVS2zGaaiBUn4j",
  "key42": "VdgVD1TyGZ8tngsUzDeLCUiSwvPaHuKW6BuuCW5EyTcmpuP5Y7SbJ7YaAeVQ2G63uUo1WHQX1RWT6ckp39isHoW",
  "key43": "ut8x7eeYiHjFdtaZzHnRhkDGmQBSZiympM7hVsopW64BgsEHGNzKV2FnATzRXwCUT85t4H1mRH8MiVfCmVfWBvG",
  "key44": "5W6D8RgZHX8xB31LKt4h2JEJRErbhEb8ML4RrQVbehrTeXto17dpfs2PUZL67X2KY6j9H2sBTWNv9ZedFSMeWnk5",
  "key45": "2iqPzp7AtUAB2dgW2bi2NtpA3JQVF4TPTE2JRpTTPV91qCHp4hkzobnUrQgn7D24UuB4vycoDjMk9cXofKMBVdma",
  "key46": "5ZemMCmrzDpfcUkRM1qJkb9SzLF8eDJnhvTFhMXg3pLqPimwcHLRjXppFsXgczzT8eKdrdNNffY85vKYbNDhvzQL"
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
