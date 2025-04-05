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
    "5mCqxdfNRrmEkxhRmAoUwaZWAaAAYLycU1ppawwnK2Zu6nb4Qgv7nvi5V2cZt48cwwMzc6aeEQxHoLQcbpfM3ccs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2coJvC9NcR5TWBS4TjKdUnw4voyLA7to7rjsH4sNAQYhm9DT9Fgi7wXtypur5bxndbtkiJxCtXkFJW4jUv8Vp3Zt",
  "key1": "vCMx48TcXaA6jBkxFE358d2TrePo4VNwNiz1aoyKb8ac1M91jyeyrZHJYPLLj95iUrHob2rh2uKSV9gzUwGKPYU",
  "key2": "4j5pGhPLdVQT6VqSGrSAdu6Aes2BwRnN7immVxqH5xZEU7KaRwRSrUwsm2eiP5U7copMXBjaX7e3VqLMYVLqagxk",
  "key3": "2k9CqzLRQXx3HAvfjnYaYJ9N2jwtRBc4maZR6mFCMfF1VRwukkR51SRnRZ6kF3UtG4BGe3Wc75kYmXqkXY8eDYva",
  "key4": "581LtTc2b8R3e48Tc6Jjy9oL1M5MkDe8Ey4UPQEBf8LGug6Xk2A9ci3KVEv8BBr7BXFzLEeWCEhoL12N6kAQKvGr",
  "key5": "4JkRcQ7PvFBtjmkH3tkircAWVr1YQq134CsRKNYv3wsLyTDeGfWwu2Lfak16LzXeqmeF1W7HVQazrdRpw2NYJG4P",
  "key6": "4oCyk6nQEKUf8L9Cq3VqZxA9kitYR6x9aazXojSQHYga5qxDU5y7VgQrGkfLRCXt1HGLEKPfXyxAg7ossatgugiu",
  "key7": "2gMkQ8troY43NkbBdTX823FdukiicnPt6ty2USVchJDhXyyQUt7RFgoNY49jqtuZ8cdcmM688AgNEDA2ToruoNBk",
  "key8": "25YjWQkbtZGq5Swozasp3SK9j3iKTKRLa7uLNXZ9NGNTY9NVsbV6Uinhhbws2WzpirygoiYT5CMCTZk4kMuFnTDZ",
  "key9": "26KRsuXqeYWDgdkwtKai3uJWmpiAhpWxat6esTtLWnPuATRAhhFJ1aoZELVpPCSmQyLZQpviAG9EwaKMFToqW7T1",
  "key10": "1R94SKzPnxXaJpG79PmnZVSY4Vm3Wx3SxDp2R5VoiMMSj8zCmxx8WPYconVNJXkDXmT5ZLQ76T1edRofZePMjjz",
  "key11": "5mSfaAnhKiu7xToT318mngyEuNyjMmmZkYwdCbBEiVfPq8xp9N29Gkstd75j5XuWzG4cJ1Pu5B1q9CB8JivtgKxA",
  "key12": "5TnPK2TuanW1xbHPKZzMSMFjiFVUsLM3Jt6Rro5ifUvF33QWimS1nvqEDh2CQzDGTELvifZAcsmR61adFZ5NVbkc",
  "key13": "oE5mbziV4kTE3LLs9YJNVzEQ255k2MYknSjohofXvszT5WzuPxMhs3QzKZp2DzuGR7mN5fjoThFDT3ZMvF83Tcc",
  "key14": "56Cmfxzw7FyVZpFyhnyPvL35jLvDdgdzkrvzEk9GGNApsDhWcjdodXhGwmqQoBTV3GKxpFur9oFRx5NMe2srrQtB",
  "key15": "5ZqvC5URMyaeuPWiy5t3aM7MTr9FMZbz6tKvT4hrQCCfBtgUiiHA3m79UVmq2oV9QhimdxydFc8qUNMiLSMToduK",
  "key16": "419G8krBGzsUdzGaiFhf491QLn5jrju1gGr6tQfaXPvPFsDwZnPZMhKmrXPaxrn1kBoQwbRy1sYGfhErEbi7HVSC",
  "key17": "2C2jTpWGGKoR2NivJQ5E5UQ19c6XbYs8rMrJJ8npgLKKVf5ckMwVa7LWFMxmM3AkseHwHwWYQ5wikH6yrBXGBdZ3",
  "key18": "547Ce9emsE2ehmzLhvmRoVADuW1L4kDUjMbBUrT5W87qaPqyLJHwLTBL1K3Q5W8MuHW4D1gGA61E4xeUN3URUMYS",
  "key19": "58xYgFW5byaDa8jpgSVFHDEZoPmJQU11ZpKgjF1AUm6ZwfAJQhjL5xz3pEt5QP94vMNaxZNNx5SLxZ5JoG6PBqBQ",
  "key20": "bx4Hr68Mih4iK9Aa4gECvYaEh7JGkVoKdUDaCwoEZ5DnBMmeDyAaqRiUivd2w7m5vrhzrtjLBsgdu6funRKKAVG",
  "key21": "3T7xDF3unzvUGovPKvoCpRrrDV6heh4k1HmVEtCUFooc6NggscCVrdvxVhhmzRKEcK5c9zHLqFVsM2vkUEKFJste",
  "key22": "4T19vdv5PskZ5eVRPAKEFQGwT27HPcnWDphL5pdPB1ShWMg2dNTJDZWYAwvgZDAKzfaDLzMCyxP7uDFFvzri4g15",
  "key23": "3eLm7B4mMg1No1gGfrEnjezmSuLWyd3TQKJ5Aw62S1SMu2aL4SKcXTJUKTSTthxoCw9Pv1oUeKe323XuS8tztW8G",
  "key24": "22m5L9tdPKmXAh1s25ze4d5vbgFCETxFbLAji9Yazw71q42tnspBZQGmEXpn3zod86qnxNZ9A7ZwCY5v74KGXdGx",
  "key25": "2oQkWxKoEQU9yi1Gu8sHUknCq4pTAnFkJhi6DXFEMkjsyM5fcCFJTnRPKy4pijLQEhfLRbKe7LMLLwvrZZU5KJEo",
  "key26": "661KhGwxG3AAumwygf6rhNuYkrh6xGBSjFzZKEQVA8wmV5mF5MUE4ca6HTYaULALijQL39mnaAsWaCLUqsdJCF1a",
  "key27": "3t5jJWXPF41JvMN8roTtRXEuug2Yp6oF27ZNn9RbtCAPVCAvQhTR26X7Cohh7SdJyaMjyPyWsZSV15UphfSQa4Lz",
  "key28": "5igFT6RP6CVv3qvbMfYUcRTEipGztUsCEz6Je7CH356aWaoNNFM44eTL2QcprYq7M5to6phko7L7F1oEusQ6wCtd",
  "key29": "7nTinQZtwnF1xyfhTzcztr5Ddd9QmojwMp8pSLZSM4pxvcU47VKydSTZWfhmDKJLfvoVJsfFVa31zGFYXvm66bP",
  "key30": "x4bySeFx44xqDgwGpHYRitY5kgdHD6srgH5TQMGnEVEVXeJf6FtnTwrDoMPi1KrUwpMFCNMY7uZf8qUBbh2h13F",
  "key31": "j16fxok6YBH9APZmY6UdjQf5LcbpeaAmJ6PZs9HhZnwMDswZzk61GTwQDoGjhYtYeq7j7stMTzQ6Am2myZNTs2Q",
  "key32": "3zyiTi568LWQxygCSTFa3xBmzknUQwg1DiNTnxf2WNbEMA6JvRs8Qy97HVvRn8PbJpnHig6htrRWNax7Tz8TSwLA",
  "key33": "2Di1N7xsSfXKbhSn9p7zmMept1LKNidSLMisfFe7nTiGceveZvFJWt31K1sVeqxfPbKkRi3DXKfNZ6P727xJGmkX",
  "key34": "3n8xv17e83zp7HNZoypZisorRgbx5b6VL86zoggE4FdA45ic51GZ2m46tu2oTQ57ZQKRyQBBFak47q3d1izTuH5z",
  "key35": "53JDTzC4YHGg5GArE32ovc4nJwbJRHvrXbkhQTeD5KR8m9BTKHshB9jfgD9fwe1L9HNG6AzDJwZhzPS27xJPCC6e",
  "key36": "5PygZKeHfSGAtvc9Bherzne2s2wUzYSj6ec6ASXAAh51Sk5mcGiwJi3pxyrpLHkADNNNb5puTc6gbMFgRTEdzBpJ",
  "key37": "4EM5uWcEMHJc8d8rD6jHRiZDwBqa621o4K532G12EFeBHv61678gcBYECKxKtZsgjDHaLdc6YP8kG5D61YcR9hx9",
  "key38": "4tKgj7Zekm2kykjhzqqULHU1ztbrzTt8eNQibGY6MLkDgCcfjp1tymPDb8jeqemnCHcY7C98wLNUEKDTEFXMX17b",
  "key39": "jngCixVCfcqNoW4aCL8Yq2LGxC3g6VdsSWzLXDNH3f5FeRdUNV2uFruREVaWH4WRW7R8rtS8qmXy1qq9Rrxtgy3",
  "key40": "1TweFaBzu6bXYDBdy6QDVz2i8Z8kCWMnLn2jUgLunS7tw5KYm8z88rpFMNefvyXe2x8rMiaQ6yRWQATJZMTxPPA"
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
