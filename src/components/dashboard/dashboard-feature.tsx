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
    "AJ1qeXPNrTvXkJvEQufHMs6Zik4FUMbiWV6r7CB4s5bbNLzaxmiERAFR141q1KDy818FcViCCE1cENCLvd8REFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b2zNodtQRemezzQCXuSJGZCrtRGkukp9q7Z9ppcGKjMnewpfAg5tLRHpUsyUrHe4WsJeXpcBbNMkFVtSGUu72Kk",
  "key1": "HHak85MAmdfkC2mdmpPQLAvjU52MqMcf69tNNxQnDqVba5dEXYMtzmMkju3WAgxfGJkz9dd38pvLjQqV1J6PkYp",
  "key2": "5VGvqQK3JHD3qXxdPAmUA829YjHe1wb2RH4g5ZXtNhjd8ZvMyQ3FvqC54xv11yDmnUZCGzRSLqQzLdCS2zkxMiKX",
  "key3": "tmXz5bgxSy3YUfaW4VBGm8e4QbFTzx5XtEXG7HgZYPsTbZSCRVQgx9LF8EyG7BpwGbBzxo9e7R59EjFE6ihSNww",
  "key4": "4hRRX3D8jHajwne9SpRi8sE39tmtcQbrNnrL5c967sbDCkQKzB966PExHfZx7tw5qxrRDfFgcGzi5GMVWwaqiDGi",
  "key5": "47noGbVESHfDiPUuoYoKQYsaUUyrjcmQBEy2Ma5SQcSpefaMKRQXVt7owTXa4qe5PsGRpkRnitu9piPnCQzcEt5",
  "key6": "pN6Qx4wLG3n3LuGEhgwnbKVhd9exfzavL7x4ta95WT9258iNgD6fhDZpzivRMTZWTDBXMmCyPhvT3adx2suEt2G",
  "key7": "2vFs9uG19hJ6KxsjxAJnWXtys9VdX83kKwa7EamZYdJ1troP7imsJXHhv2mxkvh3PMcxWwWxNViNMr4wdC8P2obQ",
  "key8": "35zrjXEY6XGZBqRBYzTng98n2W2g7fzvLPDUwu9arzot7Tb91fr8JRAXDRQkvxqyP24N9gRQjkVupdUYctdMNeAi",
  "key9": "2jhjXuZFX6njEPXxEozFLb2FWFDz5njzUtom2rud4zicAyptp4NyNwJpcGN8wKPpkL56DQijk2VRwcX9mKvCF2Ui",
  "key10": "5ygT72no5hqQyZ8jrZEwJhGbK6j5FWN9bcfaG4ZwtUFnf7o9yRBUh77ioHimQp49czXk64cqJYCU9nRGP1SxMkP2",
  "key11": "256G45Upyr59ztHjWXvAXYftDWSmDUK421U8DHgK8UBFfVyMX6akuTGLYqrHzieVgjn4XgWNRCw2dR1wKxckRUNt",
  "key12": "5z8GD4g5WtRxjogGGjKbgJnkizJBuVPcjLFRUGQvWMhBgjWPTVibq1ZduX98ntDZg2JwWsQr3KinV2qu9e68WNcY",
  "key13": "zSqeqwcU6c4Zr7XZGGg36eNJJoN2D8SboHAaoANsKjw6iVkhDtixAMWUB2vF61MSvmQcAyqo4qo3ynh22CJJ7Ws",
  "key14": "2sCTLRJNxEVR6CzJ5uS5jz4LwUXvFhvw6Nzsjb6V5ybJSxqgoiBFFg5RS1PzT3i9QAXmorQuLipDRD2vir1L9U6L",
  "key15": "deyaJgqbNDMFyT7iMsgLEEwCTGZbZKoDcWBG7LE6uNSfe66KyQT4tiwBgvC1x93XUZTzCcbf6Y12VA7Ue8P7zmV",
  "key16": "7iexiforKbX6RCD3kRMHHufnqK5nzs9jYE8uLfZEXnLZTMQ2nPMeHoS352CDCvrTghug7MWiqqGuswNNNTGDryE",
  "key17": "4GqQ8nsK1xKwRNEj7RQnTEgoBtFtRNDgVGw8o14TEpcwBkGg7uKVpvs6urWr9DmvFD6SLg3Jt1H56gWDwYPixHbc",
  "key18": "2kbuEasbRG6bJvQUfJouPvSR31AvyH7USg8xA76hMN8BM8yJzr5LgjndvvYTeyV8863q7WqkxqxMkPQfR5YuSRWL",
  "key19": "51jNw9fgaso8VDu4MZaib7tin2qptQ453j3snqCYtBBCDtGwyxVaw5z6T4VHmcSeRuiAgFXM1QuhPofmaSp671xb",
  "key20": "5nhuMuHn4qtYCTZriAhvX716SznacBkT5o33Zw7AAdCqYtfgEEPiR5JTSJBW42gbe6Sydt2e94bZzZJn4Y63vv7Y",
  "key21": "2hP3v1rH66wXnTDpBKiUsbCVBBQive1zMaykBQfaXJuxPmFQJcJhsDsoiRmAjUq7pH1UhBcW4xTPoMqBu5h1ZiUi",
  "key22": "5LowfagxEo8iSP5DP9ijoKohTiph4DQNWfH6kCBBEt6vbnw6LXe25FY3bsYSNQurNiWTUgkCTRjTjKSaNA7VwSWp",
  "key23": "3WswdshSJyeq7aUk4Aqkbk3oqfDG2irTpMqG5iwajPBveeL1fx3pNGZLpqhB8BDML4HaJb7Xa1p29DXZbxETfjQX",
  "key24": "3jJJgxCHZrszGuD5P5mfo2cMKb38cEmbdLbdoJ3nh2u4oE3B1PVgxW9ZP7fRngSPDcwd19jKNdNKoJgiRp7a3DhX",
  "key25": "4DQXhkjHmpMkP5JbxhucfidyycmeR2q8WK3brGZS2gus8RaomVXKhoMi5pNxQTn7LndgNmmFQ8TjYPwyvwiz43dC",
  "key26": "4Bs5wcKnXdnfxhptDULXV8rtMFmBiCiUTCA24CsRvi6TfFp2XEFRGRbiXrCPqgW1gYLzx2ewv4GtZc6LzYgar2dh",
  "key27": "2yB775dMunQTBxTxcRxgXbjN67qGGfvCreQePd28q6Zib5mVryNktALDBKom5kVXVQEbTvp7qdjqsLJ5owKkq76V",
  "key28": "4s4xRmeLcpTU9vVo4yEukDxTWdVgMkK5oxFYRA4X9RXH6etn1fuofGRf8Vhi4TfH8RksuyXrFNauyYPWDTmuXXsw",
  "key29": "67RbNLyUEuEi7VAPShS5Qb3NVC2Fse1BfAPbts2qenx5dCL2Sz4M84pGRGkFQrbB3HoAbgXgSf8Va7bkvUuQuuyb",
  "key30": "21wnKS5SkiLA2g25wutwo1o46caVaM1muiGw4hPVAXTdtdTDuJ1nDEoPUbdK9sTMrx9idqJ5N7QjUf4nc8xpibTR",
  "key31": "aTaLVrMNBr6FeGDicnAtbt46SwgwYafNxjuGY8du2Y9U1TV6oUyEHZo3vx1ohhLEcsU8Byr2DKciXVT6Ayepi4M",
  "key32": "4Gj86Mgv8QCHvWwjL37ECrh1RkVpavwo8y8VV41yqHQCpHJ8cJpx9xUsjDv45pM3ksbhuHQ3RsBriUVZRUYeSZaE",
  "key33": "46XwWUXnTtrz3RKFZYnr5oa8chKgLFnBsuGtuf2h8EWxUC9k7WL9DUcb4xGVfBNV8XpcPrhFehCnv3gwJsEfMHdt",
  "key34": "sutqZKANnQJ5P7xmFLGWnLFxH9YPC4GME85pX4FsNN18DNGkmBBYgX28evEpgfa6oUJkPyn8uC83FFvEy1DJWzU",
  "key35": "3TForrXxjhGiZKQGAVkCN5zCBG83Sb2f1jCVp1nKrMWCqHBV5wMtRr8fdeQYfAUXDZvJ41k7YcCQCgTR4eXTdD2Y",
  "key36": "32qdgqq4RUUeyETg3CV6nNJxrqWSDfYk3ArjrmF7gpCebJLsYzkEy59LFaWBxrvkJTkVdqdYQ8rCVWWMhTMVA7ms",
  "key37": "5Mtjp112GorqfSKbZpHFJTYTpfjudGhkgpTTovg5dfdbnCa9mkpjMhKVw46pje6E2zg4gpAfxLheUj4WrP6EpZ62",
  "key38": "2K1YxWENtrijgwp2YmpPhY4mxBAZMcUxrYS7MPazetNRFPxDS9cMfCD5bFF72PEFEa5g5dwaTRaEek5jktX9dYx9"
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
