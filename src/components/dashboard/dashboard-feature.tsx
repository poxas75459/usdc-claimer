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
    "5VAirYn8A4Kt1s2SjB9gnEboULzSm5paNhHbPNGTvPXQDvPCZcg6tFeh2ZVm2Ya8RAugfLfFmWxco4Wmv5kxjvFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wWYFhEzwF8B4jjSvmwT6PRUNox7L3E6LheF3TyNLypcX6ix18ufjAp3F6PsDVj5D6nuoCDcFf4eEvYndSZwd3J9",
  "key1": "5ceydW29MgkJNJ8a2YqRBxp5XxeXVvcZ9u1SzEkPkggjFSbiJrfS3Vx94kVbB5rfNxZDKj5y7Ez2VGMViw3bkUDw",
  "key2": "5U3vXDkmwXP5amud4Kwyisvx3cbgwRccpQ6ReLNyRSabk64ovXtSSB4WaE4DioWquXYbQW6oe2cJt56ejy5CRink",
  "key3": "nSS1GLbu1ChKz14g11qZD6T2Q8k5neBgTKPajJZGsVVsQLJtTTm6AyBk1xJmQrNVd3UigzvmM57RE42UoG5i2aV",
  "key4": "3njzEhoNsnRRno46StwPypYFzQqN2A2cYGkggA4PUUvNbkjBDWrwNzEKzpj5UNL18fRvKxjxknjL4eFWMmeS9zDT",
  "key5": "47DUkTLRXfHmWqrmqYRycbQKzTxtXqepNpgLK8a7AhQGbwWrETmjBv9eYc5U19zFwjfWPXaQ1Pe3ZnuGqF65Jzn8",
  "key6": "3LrHmApW2tf5BtRd3FASp4whB9gvrzpv3jrgSfdRDVfbR8L5YP8fyFQHoTeia6X8yfnjBzzbwKjXoAPxSCh99wXU",
  "key7": "5XMPwjMPUFvep8tmNtudYtcUhXvwzs2vwDL2MJ8j3nJeSnGqBWGK5CFGasqaMh2yyaaaGkfeou8d3PABuCHcKcCT",
  "key8": "2MHzdPbYVNNgXXvuyE8L9twnHR7ZeJgCXFmRGkKCWDJ9kmDau2EcPyDqMzpLjQeykzygKij9cdBFsaYyXtC4Bgd9",
  "key9": "4c5bhudY9zb9V67yXxL7hKea3j3Jg5kk4H4Dp8tpneEunaKJsX2HhVF8LtdFHcSL63B4Y42WvJYzxmXyQmUNW4h6",
  "key10": "3RBiviaYsxxFAADeezCiCFUzkUReXtR5HHaxtMwBW1k9ApLdhLrWSSwqWShRE2CyY7sBV5voD1yutKs9uGUhkC9z",
  "key11": "CPrugGovGJ8TjJqEJuDBMrJmpqkRLZfskoysQqXLJjmQWNH3oKiqngLjGuLkSf7SuacbFCJ5ABTLiJ4btCiDHfk",
  "key12": "3rYRTFZXVS6zy3ELGVZby4hpJwAyXmaybZQMFwcU5DM7s9DE31Td6XfZurvVEEZ7ENZEANLydpmYDotQkB4YZ5qv",
  "key13": "29QwM1UrKNj1DnD9X27emiZDZnLwPDEQ7tQpmk6fM6wCXLhEAfYRPiSrNCT7uX6ycWYCm3oZHWPHeCrtTGp451Wm",
  "key14": "4ums1UdAEgF47SwWRr7dz3d4tFoXsRhFeyDVNybysfgxuQKTeP2MwmW4F1quMjPk3W25q7LmaqK2fqjwDjLDU9po",
  "key15": "4tYi92k8U6LRavPzzZtXrrPzRBbYar6bbTMPsKUcgNp9jwZ1vzCGYSbsKUG1u9T7sxuoSq17qncLyxnuCqZfHw53",
  "key16": "2g8xvT8PSNvLuP6YG1yHEVDHcpqeqyX1McDSeXj918ujRJuK26j32jtEhsa92ogTrConZS8EVKQKBsCDeZtDch6a",
  "key17": "3kaHX89f7AfMd38JPBh3w1UXYid68J15QA9oUQCsAo1Kn9y5ssg1s9zFBdc3aeY2AMstzrd25wm8xkmA71BJ1mkf",
  "key18": "5FacooZ5ppuND8W72bVsMXH1AogcfKZCbvGDGffJjEgcKFmWoSWu3gJk32ABDAkzRdqMUrFZdRfZrxkuUTKxKhUn",
  "key19": "3YcXhS5zrL9EidG5Znqib8ZDUabz9b9J2LypCXqy73sy6unxrfEkb1BWwTqgNKcT7NXtTShX5eGGpsjmhGUpNw39",
  "key20": "3C55NG1tDnMfs5C1Qypc2i9ffZ422x5MZaX1JdUtog38YknE6DbkzstwwwBoBAYdnByFEFFM7Heb9UCjVUqjDhrC",
  "key21": "5L9BxUxen75x6Mg3LbM2SUNmSM1CSHiTpQBf4X6jx3HQ4Z3HNc51vKj1ckLnZNne2ZNriUaAb6RivzgmpmbrBDFb",
  "key22": "38JfC5gbpuYiuin8TewdQGuGHiGodM47H65bttTUw2ggYDntyky4vBAqzmFePYZe7wuiQkQKfgjrc9taA8TTuFQQ",
  "key23": "kdeZoU3ZDRPx4N9G32iMds1j4mKTEaGxPd4sqVNgX8rxGEQEVjrAnDqWs9pJ7doazhCcAGwp2FakJ86f3XjLaPc",
  "key24": "4o1x79iZ7jU1myniSwUmDAUTKKvE2mwGugjTJbdS7wr36PGsA1BUxiY6oCkj4msDxBCwGkGeDPHiD4xgbPrbT5qt",
  "key25": "2uZB6CC1bTzAGL5YVWDLDQHU897hyB1QDN9vv4VjbXVk9ThjQkvsDz5NyaEM2KZQ85fB6tomTJ6J7biuyGBPUwzd",
  "key26": "44rFpn5gpGnakupyoUAjFDFEZxeuYEPgkqMGUcEyTXSRx1oxEoCvNte4MjR9V1sGvR49nN6hwSKn4V98tvbLvfAK",
  "key27": "5aB4zZvi1U6fU4yLThiFXTzSzUqawyN1BpidJoNQUejJehzaWvR8C8UWU8MPmgxkVsJ4nyucWLsKEL7vdoecZb1m",
  "key28": "4MYCqEiUneqENt1UcZJ31dfgbRURFuCJTtRNcbpGdXfaa6uhtJwYG1pRwYA3AQQ3QBirR9xh7BTT29ixsjU2kst8",
  "key29": "4VdFs8GXjitq6YtmM11gC5jw8np8sybCGHTuUpunYNvWx8EZ8hv5XdXbyeE6poRXWQv2hGVTEVQrwEVXogqV18hg",
  "key30": "5XMboqhZaerWRctEocy4tWivxSHqxMVTqc8Sz2scUhzKeJ6bFBbVziSVPT6fDXJe1RoniBE64tcSTbG1qedA6APj",
  "key31": "4UBsMu1TKLsVTAZULocjBV7aRjKXY2hjnQKmQSUQB1wpdgkyrHiDJm7HMLVwMUBJ87GPixkU3iATAxFrvbswNpbj",
  "key32": "2xEiRTarSfRp75SWdDn1ioMp9PswBCE4VRUepreK2Qv5gYH1eKG6P3YmHnCLWeSAap6PrbCA7zRdkGRcP6hh9kKu"
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
