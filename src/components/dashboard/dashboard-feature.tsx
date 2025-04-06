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
    "4i58AAJpiiPRfaUWzkrDozHJNeCD1YtmKs6Z5ESabkdte7UH5Awa8VN8EDbyaM6CznCT4XT8u5yHJxZ2pcqyscUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2epm1Y1b1SmZ3UcvrfXeGRBdpLN8RaHbwg4722W3GFDyDWK6a2R5mWJcwKJprD4qmYDvVCbDTMo5M1AHsDBAL2zj",
  "key1": "5QG5UZXowc2MhrSBdpDJ6BmtdshoKq1Z77GEvPT2fiqDVgjzGHzZJfKupUXPR9pSqvcN4Y5vkNi4FMftgvT25kns",
  "key2": "2uny6PRgLqzPxLNdVSSyyEMRQd2KDCRTPWgvapJEWjDSzasPmoM5QJ9v7PtmUWLHURM6H5AUAoWyowNyRgB6bs6e",
  "key3": "2jveRND9ueSrus1R7be43iDBgCyXKn6uu4MvzM5RYnJGNxpTiyyADWHfWRRhG7MNzvDbfkVCsMSoadoaMMhfa3sk",
  "key4": "3nNiFbQJ5zuppbcJFeJXPJob3CehX6A8n8hDifqJVPyvPmJ2vJFDNk9RrQG8ynxgo6zSNPK2TbinYdY2DL6scpKu",
  "key5": "4EVBjTtZBfSDSBg9qXoAK3Gv5xox1r77UreG1eZZn1UEQmubvsExG8REh3M149GSXJJUmNmcmSNT5ZLXHgge1E3q",
  "key6": "4HeM99YcPuZijz29s7XmWnSiqpQW3piRczTpTuzMKgjRigyZA2s4s9zkeD3PAiXwvz2vFanYcrFhRCp3k23DP74v",
  "key7": "4AbbKLyjVPWoYinoWZZHetLzMZztd9Vnyox9n6J1yivuVxzFZje9msFRmEvwxmPWjwjKG1rsh3gXEpzhWNFEJHbF",
  "key8": "47tPQViCKSCW8yEYGYbjH1esE95SLNM3s632mJeMvehozyMTurTvRLT1VByJzUm8NQJEPnanX5kWQAeTByVwtdSr",
  "key9": "teaihtV6NtFwycyWf7PvR9sAXTCShgBTBxPSVAxZ1zpX5VnXDKGhkE4m4iyAGTVsY7htEWGQGJspBtC39jf8DVu",
  "key10": "2zGmd9qUEqd4r2EV2zwBp8YuknAmgNg1kc689gtmRBPfkog5u8VZyyqKGjyLYCMvpgVH5uk7XRHGek2wA9gY1KtD",
  "key11": "dqQygpaBg7sBCL7veh6wx7RCw1PQ9ku7mPcmn4hTK3VjNdVpbpWsn9zLWoDUAnfUwzpYXUM1ER9s29x8M7LxT68",
  "key12": "inL56d6xXCG7yFuAkUq2SyK52J7B5F4aT7fehCY3Hfk2bkqyoGYvqLWqTVGcFkcFQabbNYgKjnb4GUfFFc4LEYT",
  "key13": "3iWuot99KmCSzHMKPfH3UjsfyLJQN4mC6AcJR8R7Tkkw2KbujfGGwsKJXfrWG8ndbGipk6w1hywL1RVBeC8Sb91m",
  "key14": "5y1gm7FtaRT7nj2VANMdacNZUqdVUtRoGCz3u38cSKxh9VQYNPNb1NYucvhSDzAJbAbaeGVPhkUUz4j44qARgc5Y",
  "key15": "8JsXtMyu4T2iGFCrGxTA9Kpy7uvr3ebvettVwmAiuew6mpcmp5m3ej4zRpgX3C62DVYQWfJMRZ76Afd9irQczg4",
  "key16": "k7gwPBbGfxZoVxHpTjGp9DkHjL3naJ4SWiV8uHN7yt6nNrtp4SU7ptEs2T2VbUi4Qu7LDk7MSYXpmohakR8eYWU",
  "key17": "5Sj5KhpwBxRmqkAJDJZYRVem5Zeru4v5DnLCjvaCJ9zZWVi8Trr4nAhkWvfbx3A8g7DASxGpaMQ12tS2MUML2SdZ",
  "key18": "5uat6rs6ExBUMv9XGKZdSeZHT8SqMpucZGzHpMfzqQszxM4nuUTpdVZy1onTyWCSna4Yuyg6TDDvbb5hRp2zDMU9",
  "key19": "hwKwPE5Q2rhshgVgs9BkYhuy8vnZTHBA5Bx5pnpe4P7XV7S8uE5stwu1kyM8GJQ4zC9DyqWN7JY6DW1vowdVX51",
  "key20": "56hLBgvnG9SvK4vihJni8fxLtahJQPDJa2HApjRKke9oYG5hM1JyFbu72koAwCnjU7B96Tphk1J3i41MrMNbED1H",
  "key21": "5b6pZhzYL7hvawmt2txdd6URxkmb563d32Vbau1pV1ct721NbgWwD2wEGzvReygCBnM4Qwwh94HTKJCLdwhLxBzx",
  "key22": "3CLP6p8dqTx82xtuoRy2prqyyPiJiFkQkKYGZXdUyPogXftoVwDCPFvtbFiCdK5Z7w8sGxXN6evr7uqmGUV6p3N3",
  "key23": "3sHYxXeVTddrsfavfNoWkerweNUMC34PP3c48SFf4Azf3EJk95mnzMBHX1FMJJ4L1dtrhZk5mwpkV4mkASKvUtu9",
  "key24": "5ZsPooQVaj3yzAkPv6e5tTraWfbhNethbv5K32k4Fg3YnVvvQzuACoCnC1EdoN2TnNDpSFLGVSVZdhNRoukWiRAm",
  "key25": "Bj2ErXRmSAZfJa6PTzSoY9HeC4CU6vKiWRc2DkNV4fUK58CKCswepKnoBewYqbcH6UybKvsrH6p9WML5ur9H4zo",
  "key26": "3Sa8g19Yx5f52w5PMM3rZ887NZkb1UyEXtPDNq1mX32mt6mEPmAaeXxoucGVSZi4jbm6Kf5qLCCLH4m5MXShJzQn",
  "key27": "53zSBJeLuvjt3htez8Yzvqez8Lv3DxYsvzUM8n4heGkriLTvnC9i5u7859Rj12tBE9RDN75SoM8yFNZXi36Kb9DL",
  "key28": "4tyrTq4aqn5iVnzVdstcGi1iZzuFvZiNQznJc3rrnnDET8QVt6YGKokyoBr9dATcy8L6QGqwtBpF7N5ds3xsynum",
  "key29": "2PvFKMs8XZTCGJ9MS2ktamgUCBXGRsUXZkaxmXcekqjPj1qSLBNYKUGHG8BtgEGmerMqmyMY9HfztkSV95c5fDBo",
  "key30": "3CezFn3xuUXNi7HER5VfibgxAH3kcZejd78uBc5paWyGXwNu1vzhFhcGJvXM3AkXM2BGYuoaSqWDN1hW88im4jgn"
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
