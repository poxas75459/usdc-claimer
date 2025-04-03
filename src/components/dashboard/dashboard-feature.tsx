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
    "2jtsSidNDYGMJHDnE7tcFCidS1awA4jHBSmXoZ1BGoxoXQjQ8jjCfe9ivhsBwKeQNmv9NzG2iutes5qoeNrZbdz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxBgaLrxgC1bBN6x9M2B9kPmpmXWWm5P1agzSnH23pyHs5VfggixeD6oMT3GJpUfqb4ysrSz2qh2xYMas1R9sHx",
  "key1": "3b8VeKSzzGvx7pNHyEFT6yJuZ4sTkaa4eUXVorpfUpr1g2rM8WEe4zkw7XhW5gsPqzMJd9fcoipfCMpsVMrKNY72",
  "key2": "3QttqdMWMqvqVoXWGoaX2DqVUw7W86GABe8eFQJ88fpMtEvV77CRer4s772UKffpLBZfJMf4wnatuuhuq4Cb6Az1",
  "key3": "4AnrHurn4CJf7eGHwUnLdJAiiA25j9QL6qzTqT9RNWuDHBbCtJpk3rZUCEdPCFtBqpQBPRptMuVwyD8npciJ5ZA4",
  "key4": "2i11Lc67VhCZrUm8F3TRH5K3jobrvdTKMuvoCn79XU1Z8vpBejfQyGSojvsr9JE73YKJGYqrMdzxa3h41bfPonGe",
  "key5": "3cLFqrdAWykZ2goqwpU2KkmbjPheektM6rsV192Qw11uEVAqModJNmAPQ8pKUfBDYdSrD2SQuH6Qnhu8VczyMMsy",
  "key6": "uVHR3GGswa6LVcy2FQXCJLEHCuugXYHCR8QDJi5BFmz1upcUUdfJhZLgdGJuhRoGgpGvvaJt2KFp6p5RpGLPrgj",
  "key7": "47WKjoWM65ibkihTBvn8fuVfw54ianyvdQopm1PUVP1LCkfBEyDRzv368tbekUKXpc4dKdiYLwPKKTj1XB5e3o1m",
  "key8": "2Jqkz6RZyWc9Us4Va85ogz9aGUUKoeBgFpGXEsJYmfebJy26cfmQmPzZE4mMp4Yw77wiErYmyXHyYEXj798yR9Ub",
  "key9": "5zk9oHThjWi3xvqGQhcGqs2Sihiv1BW7UjAJ1QrBAMNTYeux7pxUy3UEf871yWVowHzqGm6T1MAxgmUGqSPFUQkt",
  "key10": "WPK1uqE8EGcgRNwFPHPXyJfaAvW6dMan9816LsffEqJjZWiw2MwZpXJnCCxj21ezG8B38VaFxP3VXarmU9S1zwy",
  "key11": "4RMWpdsstXUdszVRS44urPzHdZ2gKRMa5ifaqxTchMYCyvxQib3QaRa4Y61vnRYuCRabWe31v7gJpc6NzsxDRzNp",
  "key12": "aSKn7aKWVf8jCXs2JwC4e9GooQU8YdTj9ivjPaeYFcpUZDVkqUC4Zj55E8thhezJr59w6ySzyk3H8VYr3cm7F9S",
  "key13": "4j5UtKkQgoFmriSV6ZWauEytXH2jzSNxEbvneVhVEFHj4xkxfcWi48iB47GteyKZhG7DYhXL3dnp68z7nqcZpZnV",
  "key14": "52XtbsgkEAZisap4uhP1acyB6a4J8sijGRBrgWyXRFAGEv5J9HeNP8mrkbE1RY3dZGG1BuT1aZzMWgMUBT4CX2qu",
  "key15": "4xQWnNdiP2Gz9diijC8b9P3tDiNaQGaM6VHSibcgaA45yuRsmec7p1fWdUH9Vggye8hRbpMDmcLGsJThj7A6vtj9",
  "key16": "3uCNNvv7NL1x5PGggMYVhkGtnQjhkKtUeRUzBpuc35w3ECyMWN1NXvq7a8RNfemT5ENcs7jDoe7HY3WWfEQfkAmH",
  "key17": "2Bbnv3tCpNWtMPfgSbH4zaC4md3E73Wuop7HoB2dCHapFkHo9XBQy5usreYQiy6VBfhCVynAFndMXkF7pGX3puJT",
  "key18": "5W51AcbY3XcPAFzi8x8VmatT7fvNaDVb37K1U4MpBrsSgvfTLC2z2awPyhHBcDLBUUgkouzeCJk4GE5uxTBsNqZP",
  "key19": "HEYGGM3KwfgHrmx5bZ4uAKEXKBNFvpSTLCnBog6V2ah5VZAW5se6ntvV83Ekg3d1kZLAv2q2NtnrnbvCogUCYdF",
  "key20": "2JCniH1doWubcJhRRB5uH1ES26P94JV5mMiLVaNkmHzu96W4xYiZ9gC4NNa36LosoYHB6q6GowfLhcBiwrTFqMW3",
  "key21": "JpfUC4QYH99n6mm8Ns2hi4JLEfqMTewFYAHK6RSQHffjSddaPHo8PbqRi3AWxXAazWbwjyoscpVuZbHasR2ECCH",
  "key22": "4kfcToqEQrT2avebBcHyk9pkAR5gGR5VQbXahi5iL47GcVwL3GXZ6o1xW43TtrmbJ5kkkksZVbrNYiwE8TVJfUEJ",
  "key23": "4ACfjrbCZfyE6MFjZYfS3ppFyF58cCQaNXD1mNq9yVyYC4cwxXviYkN5YASDsxqg2tDWujPR7tXywsHkH9SrgNxZ",
  "key24": "5ugCTTF47K6NAhwE4bSW3VeTUNhpYyMGoukpJYuGQu8ReYdZ4ACeByn4dDqC3tyv7g6pbKfhb2aGarBoqsniH97p",
  "key25": "5d2HmDhnuor9yfPd3Ez9gsp3VdaqF8hTJdu36TbCd45XdqB36YqEC6UcQSyw1ohMbph8hSeBZQZmgDUeGeVyQJJ1",
  "key26": "5tqTMZdzQizkCeVucTWYHGxdeSb3U75E69GxdFYhwxsCehJ94zZXsavL4d5uWYW3oQ1vGFtmZeqnmwe52YKzT47t",
  "key27": "4YPhXWc5mKryzhg4oCqiv6axTorLRvkTmgjDFHH2ewkSjgvB681pmrPS3rhemohKJSyDdmWcv4NcigSiMq3Lp83c",
  "key28": "516e5Wv7pwxMLaX19Mds12sSR2CnQB2Fv5MAQCnCGMoJ2AZfA3Qp6dfCdgqkKtgPmKyhv9CqwzKaWBhbsH7pZgHn",
  "key29": "8sQXeC3KqPrZMX1XuDkYbxF8fm4wR9FRaDMPX9aaThQ5twzERT2Ekam69AAZ7fqZtidGnw1DMjGJMuBafo2SzLJ",
  "key30": "2eTdqp7i9AadvqzP9T3LD5aQQJtMDnxtzdgbjQRwhtEFtUv3trLVDn2QVuJRCciMN1HjBDCdpSy3AFrBFGXRLKG9",
  "key31": "2WsPiz6Z8ntGeCApfv8B7Cc24KDXSSJdUg1aj5iF6XFDXqE2Zee2B5T8yKGZTQiMbpZS8xKacBP1U4zhzgWS8ZMm",
  "key32": "4NeuT3VMVPQ7U8ey7BfCS9KA94vZXLuHrrSBdtrbXhaR1zCEEMVY7L6x1QQCXbiSdmRRETMFNHsSUVKkn6hXYdij",
  "key33": "3NcWdRGa5GFAxAk3vycUKpvNyUBujKXqzQq5uQFjzMhcniwGJhs4PB51zEkGayf9zrxrUjogKB7e9ToTAW6GHyWa",
  "key34": "536tYo4ubYanrKx7mxg7a2AxJQjyzCEepxn8ZRF1SRmRxsfyA4EUaZdqoR8yCTERSw6g8MoESFHKRaUVx3zY9a5j",
  "key35": "5RnkQ5y3pBo7GZjyfJvMqeyS5fcuNYobkPevqpoedDEKq1X1yKLEkXNdsFtmEDHtt6gp8RwtwiAWKWA8pAYt7ZgR",
  "key36": "3G6tFQEkK8rn8B2UWzSBvJEjxUQVKbAr84zFeGiUsQCdPGFvojN5ngZMMm4s6hh8tmGwM5A9hL1yBtMkFQBvDeYr",
  "key37": "3wn4ybsTdZd2mg7ewLLuioHKHuUnMYpWfGAfSwPvB5UFiLeuQaUToocedVXA1uyLtbvwuSQipH9RtpLtdjqJzrK5",
  "key38": "3yW9G7YAKnePKFybzypKcqbDRa4FjaSUQtnQLeFuWSp7up8U58dpi4AgVKiAyXvM5nHBfpy5jAqjhtxSfY4kuTrq",
  "key39": "rWUhhPN1RgGW1k3zxDFJUNZPKq2zGtxxLnjGTiyJqhVkGpXeLQfoT9GztrdxtEudm6jw4vydueCqguKMw5SXqVo",
  "key40": "5qkaZuKyk1bvhsM23nfApGiYzb5cNPax1GuN67ESk1oN5fsYMFeryatKMAxM1FyWxRz6ATwmW3gZcChzFu4vpWwF"
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
