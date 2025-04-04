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
    "5yDezoRQSJQj4EuZTqUzWnssimV5nBhCiPrF8fphJsGUsrei9cqRnCNtcApahkC329Ukww1tjPYWtRyQeQ4iXvPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3owFJh1WXyt5LtHVqT7SnaBNweTzUZLLYj5y8quJ5C7JdjZj1QhVAUmrqFsaLAs1r22edLj8mLbbAFS8orDTqKg3",
  "key1": "2QrQHhyuvXAJVHsbinmypdPVACzHL1aBaBRmgqmKMXbzPrKkKLJFMmJu8rrwHKJXGzBhqKpB7ZPS7qShdFq3AtN8",
  "key2": "31Xh5MypombqtJHAK3VXJ7ZXGLeU8EKsSMqtYzMGYpzj4sB7Ty1KVmnvSrEjn3Zcza95Lhzf5Zmfh2HJMSMhHama",
  "key3": "48vpJqGDvSZraQt3GvHAukRHMuJ2vBW6EsBTiQCEK9rcATNuhR2tUBWiRtWKEJ6Npfd2nsbTjHhZyPxKPa7WQaU9",
  "key4": "28Nyp1jv28SJ9NyCrwjyMJzofq8d3BwBVqRpvRXBq63siqFNqvVEVmDZPaKXqyuiwEhSRCmnNcwxTw7cmvSZX3uF",
  "key5": "61nD1hpSn1c6NpPeFpCrZTKBR2qok5kqL67FoGfSVqTvttuDejdCzsSj7w5X23j7obTdWm5NCGEkdU2gxWektvFD",
  "key6": "nQGfb69TrTELRGFjaYvmmiAYLaVmjTDF535oZaVQVmGHYGrsHu3AdEPLuV6D6oPBF7z1W1fGCvYpYEDZrT933Xt",
  "key7": "2STBbzV732gwFSAgQggpwWEmNx3q2ZNxR39WCzh8Ti1kwEeP4AJBsdujBgaqtpphC459b58m7ug2S8XJKQTQyTUC",
  "key8": "4anyCJVE6zE7VhZhkfo4fdrptWTueACyTTbBqE4jGgZhn7shvTBBonMNokYJu5Df1vB3xTGooS1my89aJ8Q5sBLs",
  "key9": "65Ec9mtanLokEu4n6W4Jdhs4He3HXDhbPfwszfdqoWGqK1Nu6ofBuioMFf9dzutncQDwaHF8Fg2F56rwbwthCsfE",
  "key10": "31GrU5qQSasPzyAvGQezDDedEZjL2bf43cbjuNbQTcX312dDJtPFzbc8Gkwo4MUY2VUwPWwFfGMupEVbDw2p9Xah",
  "key11": "4Mn9ZSRBzv9Sc6P67M5ULWmTuEKVmh4zEPjXd4Ztn6ZuEvQfo4f5e3hDpvJ7dLuVKqH32x2Yg2ffsaJDiYmhf6ro",
  "key12": "5U2aEKoJGqPQ75445wKZnkcGTS3riLL1PWnp9Asz5kxHHYu9TfDvUefTMor4QNnod5SvGDjPFNxrManiocrN9SbS",
  "key13": "5oCHk9gMUPBkS6Wmg8Y3YQaYWEZCGEqB8NVY241C4hQHjWzasimxHBX1tDwxPRxEMg7RFL5NWNyJgbnJxZo3FGt1",
  "key14": "yyM8zvqEfdTbQAVVHDQFFadViYCv7ZrjB4xuDoYvibPqEfvt3X5k6kQMw2Uq2zHpHt12izwrXBwSTaVvLF3i9yg",
  "key15": "KUnRDaVqFACqf9iMWpXHLWYvsSQbGqKyJs23b7M97hRe9RAVxFUj9Dj6kFEMh3tVJRaW5pJSwCu1HkTYE2oc4Gk",
  "key16": "3QhshaWHSa98D5FRCb3MDg4CVHBcMZCECCABpKWBmD35cKMANacVNkEFwGMAKFNHjVpYNH3axNahgq2F5jaynguj",
  "key17": "3n5vKeiokbQ31FkLVDwKruuBsrERJhupDmSFoTkenx3oGcnsmwKa93jgGhN6KgxJFe4hGzpzibrTopdSbyWFLp3C",
  "key18": "3PCAPWBXb2WiyHUbnhPqYMF8dxCHQFocsS3QTS8qv6Bk1TJyhZAqx1p8LYw27UGwCgAb2YKa9pwTkjpFWCFzCDhG",
  "key19": "5iZiKD9tbBRJGXvFY3xxEf4F4FUgtKF4QqHqvUmcLSaA8H5Gdg2fGBSv3nqoDKPweB4jwdKfFa2jN2X3tdvy6y9u",
  "key20": "2jcpnK3AaPZZwcUFn5SvTNEALPRSkWycCrHkBeuxVJnJMLCcVUYQLEk2nxXBU4x2aohB99TyBvqnnHAb9g6WB3iV",
  "key21": "3htfxHydcAUikpNmWbbHSMikAueKL81bkjYwGYLNC3nbMEb9jxKJ9T5yAXAvcvLVseDikxez2pMhwGzYCHoB1KHL",
  "key22": "3vPKfurGiDCcVHDHJPsuw2NvRE11MgC8iPwkT5MgDjxZhKShj1hCkeFDHeqt6iRKqvezR2WsTAzW1CMdMH2w9W1B",
  "key23": "4RpX4BYBzYF1hBmJQE3uVUr3wktw1R4KhX2fNkf1R2n6WE1BNmMYQJvSM5q3f7AFxESEVuyjBCLnHK5GK3ytdNav",
  "key24": "bwvpoWneWnQChrxd1MP5TD3pvoW9266epbkEEX88iPsjwQhFP56Wf6nN26bwAnZbdmPhBbJZ5iuCb9DeWH679dx",
  "key25": "59p7bBp6wq87v9x4eaAbvGEJg5hdoRsCfs6FAgWZxQiJQG2JL5w12QRaDxAvAvviVqXNUTMgynbcwuBcmGk1Wfp9",
  "key26": "3oA98ep9BAhDj19pvUUjm12bYyChKP94tXAe2w8Zss1YvLz9ss1hC8kQPdLj1qJiTAAFAshqiMHGZnxeHxujhLdp",
  "key27": "2i1dbs3xDYXPGAd1phiB3zCdJ9QCA7xDpjXNceZ3FfqM7xtCGvvNb8tYjLRDy57eCtuQs3xDXVAgBNU18m1zpx2N",
  "key28": "2jnotUV9xt4DVZ8GiuqmZFgeUK7ryQ6qpQk4jN1U4aeEN1iqrHjdWzhpUybHaPEnoYjY4WEakcQPYFhs7rr9g2Qe",
  "key29": "UsTxoSK5M4S25rPG8LU7VYt5yARB31zL7RwqoTMLExAHMzK8xpHUP4BUZQC3a7MTxfC8umzgcTFtJVAYf1Ts1nq",
  "key30": "44ttfk4Z7WQn7W7mVGnrUgnhsjLTMC2weGDyE63rrFgiPwbNoPGdXEzYKB5oANEYU68Et44RT2sw6nfbN3f424FH",
  "key31": "2tbasZ8c3X6LM73fAX7dR9dXT1hDDng6aM3iy2RE6kJUmTj5PoRbRMdgfH7ZogRcM3QP5SSLWQ8bU61hkQtxQKzX",
  "key32": "3vzmZZ4iTuxrg81pPAvk7xsBLyFMwaeU8mREVq6uEFxDpRqKPWGThnZzZDYT7TFvQMUDjBB2SsZqFKs6tNDCR5Lg"
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
