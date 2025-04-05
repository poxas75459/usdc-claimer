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
    "41ZAoafqssAb4bvcYmt8nprERogUDeAdjRQP1wnXgRMaUx6JbhghRS789rppyXrq6kHykW4bMvavM7YMT7bfwHqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qDdxptavYBzxYNBycpVUnX2vep4x3EiAscoM4w3Qw9ZtjAPC68a7JiHXdroomHAzQNeUSTz1JUyGgVcPnvnmP7",
  "key1": "3qzGVLbbb3qHJLC8GPF8tMatPJYg5veRgqwW9rGti5atWxcDEwimo5SKaRyw4vvjKsyJxttQnTNwZXYSMhafpHD",
  "key2": "1isRCjxfxjSDDsuUXoP4URRvHLWMQw1jRDwp11wBwZVbE7rFva93tJKJVd6NQz6YgbQaThdvWfjQ2TtQd9VrGsD",
  "key3": "3Pz2ujkmeVELTytMfov7mknNM1deKh4T27HHTS9ByUwh8aF9b8rKto11MDRQicn5qBZJB5Hh6PmpCAkKizrKpFFo",
  "key4": "2HSELVcpUap8Xiy6czsD5kmEpsF2izHXdR2w4kzMgAGTBpEJqseakneMUt5HiZMgEV9ZJAQqLaPEYuKPk7vMVL97",
  "key5": "66GyP7zEKBGXw7jXByzuNru81mNA983qcDWLoYTTmqxKykLBVsWWy6FcYqmN3GrBXpAjFfcGBKaeCAg6itduyEZW",
  "key6": "sbyziU6et8V3rXW6rbSnTGxXKknmpcXevoQAvyxDYwUgPTtYJ9d35hiQxSvtjzKzvtiJxWqZco8xd4CCpmoj8gW",
  "key7": "3Zr1189iGHj6PrAMkGyesMKGzvbb3j2opPw2iZXxjUrEUqcdJeXmogL6ZxXdky8GfLxcoc7zzBAoavJu1zCV8tBw",
  "key8": "44Th23CA6Dg4JhBzyZRhUwdTX1BnuuLccnKkQfTvq81aoPWJLH3pgWGafure7ArDmDmVCmZ2pZffadPGMp45ksdt",
  "key9": "55ZRbBN6qw4HkS2Gyi6542DvymK2qRSNwGoSSDpPuVNwsZUDiJc2jKjFrWc4hA2Zwzjkh9Y6YgNwTzwW29Qk3DMR",
  "key10": "2At4aFNs3jzRW6Y5nWwssrLFLoPWPCbB1yDMKmuGm3nCrwvDXuaX5bcu1T49WVKpStynfFgegegQ9mysUFzfPosC",
  "key11": "4VspVsQ7susBjWs8435MPE8VmaD2RG6cimaLSZLEKqMaDPSih79nw1RXFymvDEfn45zX9iGHGv1tLNuEZUDhrdQE",
  "key12": "2fUtwZWuTmZ5VzESMWBCxbf4udHy1Pt1fZgVjtDjaJ9LggDQvFwJyyUr584TZFPbUeEPrU6AcyYb9mdGafY9T1bE",
  "key13": "5yGktZ13xNSYSsDmDiERSR9qRasWg5shdsA7nfosXeevj6ifdAcMynws5tumDAbJjdQQpMwSPZTqBbVBmyut5GCw",
  "key14": "62NqREzJq41Ehv7EPVD5xs7MnHF4aTNmZfQwxvvvnQGWKFBbxHo3k9dwrG87zc63E2XKSxTD2i5Um3QCCiM737rY",
  "key15": "4cF2s7KFeSGneB8wKpbWC3xkZt1TibYm4qY64c1Bwtm3ocrrsA7kkUmQpEWQqTcqF3EynMUWVt9og8DA3pB7oQBn",
  "key16": "3hiV9R4zcGuUBKBzEPJAvZiGJnGRd97UiihBqeNtgGNZJC7k9h45uQ6V2HfZ5ZoKJCmsGcVH4aC2KJEQuT6cKbBy",
  "key17": "54YjtqkwmFuTNsKLnjBpJZi4RQeDQTSroG6LENzQRAmc5W2cuBpAZrpM1MhiKyWo8oxLsm3mh5BkXfzufh6sAzxL",
  "key18": "674GAMXouUvDHpKM6KDmmv9fbfkH168FyaaVSUXaL3dTo5FgPBqB67Cwk9PuFcHDP9F39VdkxPVUrypgW2JBNZ8M",
  "key19": "5fTsj9BzgtZDuFtVvA4yUaJdLiR3ZPJokcYcT7BM2jPpEvmXFkGsU9jgoPHpLqny9WYJ2L8cbK683oUYxRfjJs1C",
  "key20": "4eyCdPMeGKwV1g5EcWsYJM4hz1Ph9Ni6xbbFASZ9ggkfk98WTnecXuDkoT3cmJ6MyMsXCoyoskCUURrq1Cj4n7xn",
  "key21": "3N1WZ1X1NAf3XKgApoM1ApANciGHVA5LpK5G5CXZjEywmtPcab1Cdx4a8akJ4bzanzVfqZswnJ4y8dYWYeKcNJWe",
  "key22": "NZoGs7vmAVVFzSkCjDhaPJsM6GkKSvuCBQJhVA222nfcea5wFpMWjkq1yyM2TGSE6HdNQtF5Bcwi8gXxSopbABy",
  "key23": "5GiVtCv3gJPJTD9DgbiNvq3bM5xKCkKDneBqnHZevhJtc34VLcanB3WrREHnxiH2FgSAQEyHwBc4d9u4DouocL2c",
  "key24": "32SUTFsGkvUQsePxvibq72eQHhbwUKodrQBSGTARuEMEQgryv3HPDNjKti2zp8XzppCpMgbYZNm5ghioXvaV27mP",
  "key25": "4MezBRPYL9HwAdHpHTwknBo1Lj3E9zY5EmrKXLBpQkZgsdwE9iMeq13BKuQ7vNfhVToWarEeweABnCKdTteeW9xZ",
  "key26": "2ZCSVfQkyPW8p7qjBsnuxJXqo43Qh71LNgRTXp7iWhzoz56j8Kpf3pVwYMbyU189qLZDetut3nW551asvLgxuu2Q",
  "key27": "5WXyZ5aDYiBSwTKx2VXsLUTXP18MuNZ7iuYeSeTe43BcVVBXDNWVtke6XZj1DA1S3ZVrNKwYGYK26oWpFzMr7YMD",
  "key28": "2XKubrgNynpNNCoSLVSttmyQQNDoypvaw5f66cVNn5rzrC1xrTpooYfcj7gaJhzUc2iT3ESCWoQfAs1tyCjH5ih3",
  "key29": "4D4K2LtDChgXq5xFK2wwE2jESVP34D4fAQoCN9fnhG6Q4EJq4NXf1JyCqhLGmiPeHdFEDuzDTGn24d2gjEn6Moix"
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
