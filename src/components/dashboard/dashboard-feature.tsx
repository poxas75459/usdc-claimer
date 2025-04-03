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
    "2oMVkgKVSVJUCNdFqQy9ZvEkN3WUFGsa59DycucXtCVNvzxAz65ZHM1g2CDyMeLJS1HN3E5Y4JdrPQrMc69EmTfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9YWzUGTna8sare6gHtddZ7kjkVAYZdGRTMvH8Vtr1CZAuzXi2Wh6BDUchLDd65mmJuHJrvq6KL7HD41bCoSGF3",
  "key1": "29mrwGqGSijoaVkTCLFY7RSJE4h8saAVkGAaLNiPfTKHf4Ah1SsWjsnZFVLENKS16uCVFWR8r9jteWnQbEQLSpn8",
  "key2": "4cJybiWJwxRnnuwwbbckiPQMAHSPpz5uStzB8u2ZA4rTVtaEzHho83tta2Ehuht9E3DE8WQze4G2i65jnBE13CTN",
  "key3": "2ctwv45v7JN9KeUb3mnN3WJn31uin5nC2iGTw6z9W122YEQFDyUGNRJsBmkjZLZznbxxTvjSUZpAKmGRjMfSdYEx",
  "key4": "iotNosrXfM9SbRUAvLUmE4MgrVE8X1AUC8UpnhfD1qSmdC18jafTe9HdYw4YG3uYd6Zyzbp1mzjztv1LUbPMzSj",
  "key5": "5Lw3KrnJck2Tt5hHoNbrNhBinSXJ9DvQQ3HTauGSGQZTdW3JjndDzrKENrdqwUSpFxDZjesqaU3FznSZreRTaiZX",
  "key6": "4ViTRWDY3vzZEMqNP8Te8fKnHEoER61kxg4Ftu7Gjf9JpviEf2XePQHJ67nZQQCGb9cCeyRBPp6MvUSuTwtKy9p6",
  "key7": "FUAQaX1W3wnnJgCNVVxLaijRjKFsEQLWY5pe99XH2Bbf2FpdSczxq79WbqHYhJrtYi6Qfn3PVmJtE5t6vHvTXRr",
  "key8": "36cvxADK5a4w46mLgt4aLPL4jYvmDSDC1JGdHegKVxkesnXxPchjKBajw3xdnTM1tywrQoxRwVZhByVhwyqSJRba",
  "key9": "3MQ82PGEaqSQESbRqyWoU1kAS2UASicxj6GpVCruKxS1CqRbEbsSHi1XCGvHF6nyof7xRwBshNF11sLpUVTG5upF",
  "key10": "3KYNmrkFPzWB8vaSKP787sJMyqTXaaTE1vWaLFtFBSBwXn6dzkzCBPvV6QtaBSJAGcEwLPudiAm6gZUabFfR1Biz",
  "key11": "4Q7VVfDeNojDrxEs6Z3vubsG8ycjPMvYKmAL4S6FqXzvts3iNbJTMiNBNFa1vbof4iQeRr775AZ5yB8ZNDbZF5y9",
  "key12": "4EtGf65H8bYUYHNr5vAud6mzb1kvuQ5VXfArjMznSjCBwWdMzF8xg3pNvJy2A4cEbE28AXbdUfBooaFm9j9TD1kw",
  "key13": "4mqifEVKzyxbyojprE8TnhDireVmGLvJxmjcGCwVmmwx6eq1zwmYZXPE97FBu541MpzduWpJ6ZsbXU2WJYjbnCz4",
  "key14": "3gouFpGNtFhmw1qXR4Baf5MEhFgVsGY5XN24P2AocQTWkbP2E6SmsasvVYawydTtjNjKkp7rBNXsJ9ndxrx9gEL5",
  "key15": "3kJ9PnbkMmWng2Y4yhkqLuKS4aLD7AqYbU4sNCbQftXmd3SRPDcuEaayxNfjMC7Ba2pbzwKtWhp3C53raQBsYpc6",
  "key16": "2PJ4gszATVBUTiWhVirX9bHbmsiryFsEo8X3T6XpD5QZMxNZUgYCCDaZsoSgbgxvoWKx96GqVNPAsNKEpkVngWP4",
  "key17": "3ttgzuQgAfdUir9XFSngpNnpS1tpunND8gXcCqrHm4CWC4kaJM5kUGTga5DBrRYEH1oepzf18PhSzeMPEGGmoY2H",
  "key18": "4whJgBVvct74C7LgZE77LuR56ZPp9q1Tr23QyKdMPUypE8cxmHuZV12N4YPudB9FPMbwChVcEYNowg3pSDKbmWnB",
  "key19": "2BRsHxSXQD8SVwE6v4CuoHasAiW3pgSUQThosox5DYZsRrF9TzesQBWCLHsdQu1ePNHDcH7MpcKyzE5nVcjJJdp2",
  "key20": "4hPabiFh9EpjbKqQdaKsBKcMXVgZTTtVcoU6qiZ84PExBV18SeedmPVfgQc4zQKdAeyde2aN4Z2B9hQz4fpMKRvn",
  "key21": "2PqMgbS2zGeioTpiA7irSmZgpSXiGXX7LB5SfigxhCGsg76AmDcEQmtT3yg9AUVStbfDXze77UgXn7SD7xo5sHFh",
  "key22": "2v6DcEAQTbe8MYZyUcRQc3X29hMS17SFpn1e8Vmv2wy9GpbYwv52Kj3ijSsz4TJjjpUm46wXo5BwFNYeHHmu41D6",
  "key23": "2Kz7UEgusfeDv2wcgZTCJ6Za5tovgEsvid84BaQiwANYS6gLreJc4PRFk1PWjzK4Cq8nVfvSmG6azUHw75PUjN5U",
  "key24": "nC8zaoh7mq4NnXqhgZEuPx8c9srgii5pu9V9zFuVG36sratU5w79QE98WzpyyX4CH6Roa2JMS1U5p29HkGonHsr",
  "key25": "2ig3PJrHuqnwpPd47TDGymyfkvujVitKbBmjViC7aYhakKSU5LmQxrDz5u3zUCYVMpAa3F1GSUbmLvLyb2NNEzTR",
  "key26": "3e82yVoSNR9RkEhuxF21Qg1hySLSkefPB7atZSKtcaDa7zKZz9pYE1B2L514f9bmQ5T4L73xyoRBi6yHyw3G9vw2",
  "key27": "djnwziz23LFc9nJs5FL2ZpfRFyj73qaqyw5Sk8DgRiJDGHvqYB5N7azAg22JbRZaQtvDnqDhKiVoTFrw2WcX3j2",
  "key28": "2ia9P38ipxx7QTy4rePWsDEpo7Ku4pQYhWvBGejuhwvw8BCoEXGfDjdcQcg4f9QjyxXJBjDgbE45KNbvX2hJhf6y",
  "key29": "33GKjQHRTwKTAa3UqoscDcnwePGChmEPKskaHHsZ5Wnqgy6hpFy6At9FaGYEr2fkiz25XvaQpPtBo4XFiNB9zJQN",
  "key30": "5j7fcQJhWeuB4dUJaXFMdGqAxBGdsgdvGPe4x2GsiXyueuzCXJ1WWaYq6j6HNFfNCMovzwhwRgBQGDnyYtrgnrYo",
  "key31": "4p9g4GzRqC2G8e4KFY3qB7u2Zo2BJTZJf1U44pySNuLkRHBimERvF2tLxFNq1o9dfJtpwULXs5WYBNxute5tXKRm",
  "key32": "5JCJHRMNRCxRciD38KhXiyBrFGX6MUSXvLDkhCFYZyTjzTX5gM2oii6on1jCXe2MQTt7ijkDQn8icbfk85t9R2iG",
  "key33": "4iz2FXCfX9pg4rH36hwetJ6mLZ2ByUK6SL48FLtcrbq6GYkZdFM3Pog27wxpuysj3c2VdNeVZpVcEQAkKsJngboA",
  "key34": "3AWGNVNPkAQ3NuurnwE3wDG59m4AvJtaJunwFJS76V1YdmTwPYCraYGEK48yV3BJ6qR3ze5HXgzCxRHqua3sD8J2",
  "key35": "3dyEd6TeAJEG6aH27iu5E1LgnfUYfdTTafhA4QvGCHUWgDBXMZXJvLD2xmMmcvrwjGRkSgv4H4ZZRXcqq2NBFjtE",
  "key36": "43bu7jgMn7g16ioMgrsCD3oJn5vShfsKPE6bPH3YHo4k5GPvN41DgKmvB2M6i9pNKosUboNHqU7KkwDzA32t2cve",
  "key37": "2Rf4fbPBnzwWVoTCFUw61dpFomQVvmKFcuz9mSTNixXhBC8d8qGQWCtHYxLcJGnSvkbBu1RcoFMUSYi4NseedVQQ",
  "key38": "2SvHgraEFyu2RpMHZWmtuTC7u4Kt7YyA9wb5rqi7v4WzH9MsT1LMg3VuRWP1qTpZbG2gLppaMGLEyhKCbZpUcZgV",
  "key39": "2zMTHWQMVxqNdZ7NP99mFH58gKijAT1VbrCNUvfypSGdoJBZ2eQ39GCjjvWwedV1x3Aw1C8m9mwdVEjnJv7pu3pi",
  "key40": "49R7UifNxNaayoNZbvcwAQhQBADcVNbT5CDKVvrnakSb6wX1DoqG74dbf1HuuA1azG3MRzJFceCb3h2vtqRf13TM",
  "key41": "37t8EwBEC6hPTgS1MyTTG7xgPVwiEeNQgG8joao1QAFjcyUWPMoa53cPytgBW5cvhv3y8TdUWPfUN8G5HnafWkHo",
  "key42": "xaYStbdnvucCniVJDapPG8FF11SnAcnJx5YnB36akBDDpdEbZL8vnbCykXK2xnFu4EZPbUd6FvPsABFHCJ4Rmkn",
  "key43": "34RSNhTyEphtiN5C4fUSiNaPaisxrUbgWPkT6XkFS2KbBCekp4rN6YekardjWpR3uPY9wCfP4mQhQMtkUaDdZ9KR",
  "key44": "2BJucv8YS2vko1pPqRKJaCKumg4u56JcJWpLtRZ2GadBvzhVAB83UPUmySgPiRESUN3yPKSG5o8EFx8puR2oTVgY",
  "key45": "2DJix9PSAbLbw8HXCTotMZ9egKaPGZoc9Q4P697CA5crn6JHFJFTdu4LwsBPYu8SptocQxCEJDTErjoSPnBcsjBc",
  "key46": "3d5acgkjrvF4Y4YCbqrHrBcB4FAfistcEoE9S1L379g8pY2ckz6UTiQV81972cWoXLV2wpnuJ6Au1rYJXeMsyCeK",
  "key47": "3E67C1ZizyB8XKAFCmL9gxkQPfxaNGsUqsYB7CrEbJKdBmywGw7nLQLBNWqzj7QYemNRJwrYb4Tmzsjs6Ggvrq3X",
  "key48": "4nNs9DdTHV5RzMDy6yDmAPVVow4bRFbgEuUnJ54tRnJQiWNHJWwW9NxojK5SRRJ7G3xzzD86MtszeEa1yLnLpjJb"
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
