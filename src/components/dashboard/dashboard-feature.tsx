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
    "4DG5xVS5MEgyhRLp1ihBuGKpxyEMAcmEutEPET8tg5qLRdWzajcYbzhz7xU8q7gpjyYueQ9rrEL1xCsC9sjvVN2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CFks5jcEk2ujxQszfF5nznPy6LYukZRbp516MzcLyjLJdT9DJZR9nx8rgyep6tRZ7qJcsRQb577moSS4RgME8uF",
  "key1": "3xqWVkdEyKCSVnavw7y1KsVBFQ83MgL6XGw83EYUzNzVjVRSjUrkrGpgEruYbMkgsyqcoNwGfnE5ZuH9FdYCE2c2",
  "key2": "5bFbs5jKHukALdqQeZDwtZ5rs4CJimZShpR2oAsLKLrgo6WjuAkFhtQcMLf4xZLyQR36v3ethhMBdGgA359pqo41",
  "key3": "2XGjVQUj556AyRvPkEp5RF6xQopWhREkJfAvdjN1AmVvKpUpFkDQ4NLDb1sqC9pxVcFTwvKByvvrZaPmyAV5fNHR",
  "key4": "xUJhgb3DEtop8iBybi4riqXZ461D7BPxTStE328s8LjB4akQSAGEnk56NpQPhekXAcQQxejJT5VBNDHNw9RNbLy",
  "key5": "2AAJGYR45EoZ4zWwNQjTRLrnsVVQoqRzyQBxbDVXfnBY57xFYEbrMFhW9FKNYhN6a3AxVNyDbzrwRnDPuBYWXh4z",
  "key6": "4YZUTGNGfo9oY3Ln74KXbDCwJbepV71Qq18Tr6qHoF2WiPDR2k8KoLjQ8F4joUMy49W8oFZf1wewGsMuHZzSHRdE",
  "key7": "RjxeSqa69tYBvriufXKnjr8jQumy8noggR1JtDeEd8iHv8kGRwLTH8vfUfpYNAgqKPxp4hzP4yZRLTv2atS1v8x",
  "key8": "3SwVfDMEhCkkKXVcWPGJXprtUc5XKTBRQU4dAhWGuHa6LuXQUcYorGsVSBArNJgSqX4L7iguYszQNtNLVBQ5cUpy",
  "key9": "4d2ypcmAPvyRpWe6wZ6DupUYvPPWtRudDjuvSDu22XP4WTq5zvGvbGY1wxAsUTyv61ke9thHQEj4bci9BKxF2h7R",
  "key10": "5MNdPCtp7txJs6YNCHn52wuCXafp1aorgxGw9VmgWc3JPLemisfLuv5D6JuXuupfibpSNkS2pczc8Zt661Kduccs",
  "key11": "5SE5SLoRQXcCjop8iAWCWKuLNA2DeuQGbMRbX2HeCbNV5Shg6A214MoTT4espvPQwrXGmUhyrueDJqa7Ut3HHn5m",
  "key12": "LaHZCkyz5npfYGK4RuPmRW8G6ERq8JmofssgVVi1Lj5aE6NNgxtq4FH5be8NVT7kXQ516wHjs5JbSpdpuLdnskR",
  "key13": "3NFQYjCUtyFMCxrt5reMMjy9zpzaB9pXDYweugUk34hUvxj17XnNSAvtUeLgQnjnvXAXshZkvc6T6V2BDhvCjcZc",
  "key14": "5vqM9RBpnHo6XFFdNF7M8PAnbXD5K7Angn45Eo2jpiTPDZkPDYddD5vH6D3RHKgd3GSWNanMoBiPQVxQqnESJQ6w",
  "key15": "5BSoC8nHbB5EXEmcPwrWxQUt3KYoVfnaa2wKoWxU3BPPzP1GcqobTotZrqU4SdcXbcATJwwDx4yo4iVbk4K3LRES",
  "key16": "2VpS3o6ePbCBMbVGhJTvLP8cTBvbh5Kwi21Y3PeoETjrhcZuQYpV1pGHKmBbRdZ8Ztc9FPzZy9UADjj13JvqR83B",
  "key17": "2JqD3YTcCG2MRywJm7aZWTBi1ZHrX4dF87j4GiBjubZofo293SUpCLRK6BxcoZEDZtyaD5nM7bbyjQX4SWmCBXKh",
  "key18": "2BfXadrt9wCVgeYRFnojfTxhWqJuSr8umAB396mwk5L56vUC1xE5EfzcdCMpeVy3JzFJXqaznqd4gW4ZVeebH2dB",
  "key19": "4Yan9Bf4mSnWzD3TwodTEvoQUAqaxfo8r4ou8sxRqsXQfGdiT49ZxAx5RHVy3tj5qGFyNdtJDrvLBQQhyjw2Emnu",
  "key20": "63TCS6xC7VRuhJ5C9v3NG3nxFt8s9tn19G57UYvQZ8QS2wNr5gn8UUxXBa7yAYsBkdzsoAcMp5MaTwbCPbjXoZea",
  "key21": "45McyH9SjNtxiQEoqhdtQ2t7SGCDyiBZLf5ZXrsE5rGpWHjx9vQ6fy3rnTXFDRDYwWFvzTQYokN1TpMhx4i9UqKK",
  "key22": "XBMzA7Eup4iafmf6q7z1Tg3hgAmUoTigF48qfLqpMMJ5Mr5Yac3DSbEytRNgjMQG2SzJmPJrExU6J7ZSbn1e9X9",
  "key23": "GMtj1UPNDjRPVqcT78PavZNMjzKCJWh4Ntr5mbiKPy7VtHPYsEZYbE223sw8WFW9QMG4aHeX8KfjcAtThBvdpc2",
  "key24": "4CbLuaaMTbvJuTyLP7JdjQbk7tmNgQ7kvah5nJwnRgXKuFTC7ax76eQaobpghkq7xsQLc2r8gz7eg5dt3qqSZDpf",
  "key25": "57hqWzfPmt9W6z5npvbBgoU1Kj4GpcKkGS2HZCtuF9fjFpyMiXMZktmkZaX7TtTfGJi2BNwSVv381EucMFXwaTos",
  "key26": "2PW45ZnrrX4RhtuJUCQbumqsFrJTb4pSJQgX6ZsjPWmpyMzCC42BkszoztkFzQtYTZVo5NQ6U2UTUXJkKuMU6joV",
  "key27": "N7BsC3NutGxF4Nbcx8MabqzQL2aoKf8YzrMZhbc7x9xdp58qLx5yUNLLSX1FLUoyATc5JcRRbAsfoyPTBjPV2Nk",
  "key28": "3kkZsRdpk9H9Y4rsGgGovUJtNtiMsvrrM44b5Dn8sizkVZnPVJHrypAJVub2GcKefw5ur634qoyQpvYRoJSfYEoe",
  "key29": "2gkAjnHefu9vE8HYNijbvsZ1mjMsSTH58aKSP5huFZMVbXafjEefE6ZywF1GM4pCFqV45auy6uKy32dPkZkdddZc",
  "key30": "4RXQvbbDRbMePwk8KcrVSBBZeSVW3eFwyfX2uCXm4Z3xMHYRq8DyA1We7gkSb1BL9RK343V4FqN3nXLa8uHckjMD",
  "key31": "3MqMeQDM9jS8d1n4Mwq9pgBwLN3S2YuQJvE9H8Qq3N8899bp2sxDxKkapN6esHEq7o2tyL1weVyht9BwhwW1vQ4a",
  "key32": "EQmjrUXDc1ws4LeCRqSc9ZWE1miP8VTmnHBt5rSvE2P2KsZcbxFh6YX3hKMdpCVrMrbYdwkw1V1cerhL6ZVtSvA",
  "key33": "7hggeASyc6PsFBcxWRh3s1qfa2mgmbX58utFUdejWMkvQbWQzcpNV9C1dZ7bustKLeQAQLpqkogN8SVGBQDVwLb",
  "key34": "4ZieMuuYcaDuYZYPaHFDpGj969YbmfMrzQeRhBaLrDP5QzhbWA6MtPy3dKEACDG4qawDCYCPYJZXsTeGa7oX8w9U",
  "key35": "2hd4aQtxNYQ9pL64cLcKBbv1NQBvU9Tx8956jAwhkXuayYAy9gKJR1ay2bocnBv5GfjXNM3MqbQH6dirUxJKp9EC",
  "key36": "kAS3gtV6AhqqVX91GryDg5s3SQSRUMh5iJGYv2147DVmqs5qoo32tVMJqRa4qkfSpuv8Ro8HDk4BMt8sPms8yTN",
  "key37": "58qnG9UqCekZxeAJ8gKYDz7WVhEDuo1cLo8yfSr2buVF3DVRwVCRTk9f67ZSciPQM2GH1J7PcniKLJVHyACUm5QW",
  "key38": "61imQPrccj3N9J3Ec2URC2dRPeXwCGbuqe1rDbhaSQMyxMi7GR3WvFmKG86YokSV6JTZfQTcG4UR4GbbSseWK8x5",
  "key39": "bsXShWHHSCas91eZkPY5Mgmwz2hWmZ9m5oyeXAjBsmEko7kU1aLsS4wZ38i24QCkkhcuvXZBdBPXqZ24hiyMzXa",
  "key40": "2yF3HAJtWLRUtQEty4rq4tz2Hcg6mAbtc3DwMbvKBn9hsqf4K7iLRmZH6j4SY3jvcJCwczYh56NP5wsR3YXc5bwr",
  "key41": "2wgvoykE1cWZWGXmJidKork1GGocMRiY2o45u7uccGj2TVEUieGA8BxNG6nhGunCKkSfD1swhsAm2e5LXGfYuCnU",
  "key42": "33r7VtQcv8CV3zf4GZKkFF8v9dS6msLSCQAYV9XCS2UnrKUunSfsWZWfUacPk2fA63TeX8cR4K1hZjMa6vRzWVhT",
  "key43": "2mGbsPdAjEntWbMKK41iSzJsXMrPKyaRTqs4dGbwaQyYCtw5uAZxbrsq5f4VmEV4NYMVEyG1yAcxzkysKCWGJ2AB"
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
