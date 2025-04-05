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
    "DYf4HujLKt2U5VKYkZE8VCKttbRDrMnf8XeovXneA4LJnniYsc63zpCFLLwajBmVRA77pJTPKN5KACi81VAqrz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o1J3ku1FbmfyTXuekh3bLoaa1YSzBxnxvxkMzeB5NARBFg3G5vqJjw1HJJMrDWndrhgrP3Fk6E1rs4iVWyYEKoV",
  "key1": "3Lxeeah6v5M5aWvhLQkrQ6k5t5dzcePhatibVgSCZjshyirNjBXZqvH8ekXBeMARUTFqXpPARSHGDY1B8m56p9XX",
  "key2": "44vvwsByyjEbVQrwp6rwwT4oVK5ZVWazZdJgFWy9jewvLmwZoXfxPRLorzxWHuDWw4Wfh2uzWqXgiPrGciWBU3HW",
  "key3": "57BCEdEXEWkQ1JGB1UXgykeSxP6drEfX9Gpn9yyiV7LU4Y8AgpTC2nsXRangYiDkVJXwzWA14G5Ankn1p4v1VuhV",
  "key4": "3nuZzQmyxbAZg8kjJ7DwznrNCRmEb7gnTPR12XaXEmvYbLiYbJkNC8NmKuQs2kyYHfGtAUBfHswGKLabRC9rs5Bt",
  "key5": "2B4EiPbDZgP7BzGrfhkKSooijMpeggyZJXxufBwKcTNHefBonMM6vk3NgyEcdSd6iHd4H9c59GvR33qNQ8UokmzC",
  "key6": "5JEUQuhfnjE1xvMzHQcUbRwFwLxd1SexwtvSYMpDp2g8XzaD1WTuwksFR8XqgGJMpMPKcsg3jUoGZZvwUc9DbxMb",
  "key7": "25FMQmX4haMDLY9x1sbNekbxjg3mfD1vxd27rjMkAZwrkUCt62fkCLZjrbgv51p2qX1tMdqJRHKTNiHXvMhSuBtf",
  "key8": "67LJ3JsCRzBfXdpjwZXHmich1F6q3YQj95ysd5Gi9YYdQ5UAig7RsJ294mxSuAesjaonCXWC7tfuVf3ZYCWfW2v8",
  "key9": "2REZAycDF9k9aj7XM86mcRhy2cWUHw2KsyhgtPDFMVbtzDgQXrvswz2hxeNYZBeVs5DKHQto6tVKhyhDxm2gjqFr",
  "key10": "5SmP5jmNeRrUd4s2sBKYMFhw5DQ3GgUr2n8bd6GoFPZsYZj9iuF7gzPs3DMic1vyveQCKffXwm7UnYCJzXNubUw",
  "key11": "4yzvTijnFywKgrFRiTzvPqVgZCfV87zCc5ioLqdd9yunEZYjotvyq6Px6qU2hVTADmBvQNxqNQoNFikse4VhGL4B",
  "key12": "5hevFexXGRjmLcnz9NPdgxdmC2LCctSAUehYd5bSRPDQP7K37EEtVHSSAT7PMHDRscvFMfs7mkC68wbcvJdKKofW",
  "key13": "g5nPoXUymb26SzN2dnjheVgdRoE8xoX4sRdjXEvArr9FAzrty4eH1DgTYr3Rfs3jesYKUyrqCy756r3DyEanmGK",
  "key14": "37oLruCquwYrgXG8Yvd9Q4kC4wQmNbXKpbGBfM64cWreSFtPihK63tndAhuNaim5FZzX5aDa8jGBMf7TWTik8zJf",
  "key15": "5qCqTHfgmSETgb2B1yATt5BnkicKF6UzpnYGBrUqwAWbsKPUo33sgn3BC6yNgTjZVDLmQnVNHeSHrpHPqnKEV6aN",
  "key16": "3R1ZWTPVavcLDaqnVoyjERkkAyeAkQg5E3v1oyX6iwsyBBo4AFWyS2dwoU39oeGux8m3MmA4LB17ccU53MqsdxWS",
  "key17": "2NCNQFALQj4SMo4tNh7idMCme2qb4BBTH88AU8emp7U5kV8yAZWMvUg4AQoQntHga2fuH7a1HfdEimR5nwvVPZ67",
  "key18": "2cMmAyEFapwaVNcHH664y25ycZdFzTqSj4xuhdnfQXd4HgUj28eVgspFJhDk6sjRAGyUrSZfTTchBMmMLLjxmvuP",
  "key19": "yfFL8HCUC11RZSU2tQsJokdCizrbQ2v92SFJxMF3RhPNECF3ySMvcgJLq4k3jDKHAJhG7qskKy15KjRMWuBfY9e",
  "key20": "3DnQ4NY1HQKmNeJvLpbGanJNY2KPZWxHLgb2mne6aMV5EmVxUk7Nyh68FAnivZLG8uT5oKnsfobU4jKnMov8wNw7",
  "key21": "4audxpeefKaAyHQhuYgx9rjfMgWmcy9e8NUEoL1VqgrBPvhqLECexGEGqJvmuWtekMGdzEwNyc2hjeWBz3S2fb8Z",
  "key22": "2uh9wvG8CUEYpcetYRRVXkWmWBRdj62MQnDXGLTAf56zhtheZX3Zcaz6zhChTbK9aXZtDpPeEtTAmRfsRxZe9man",
  "key23": "4iitxw8tyo2bLnQJUPdnpD7wq88pULhyyCrWrorJwAm4XYafwNPT6vK6icfKv9cYkEdMKHkxkLWB4WwUCF1erbpY",
  "key24": "26FgjdC4fH3xSuBttAwwZdax6RhRp3earP5YeXPsm6cJgCqUP8cT9XyjgbtnipD7hDKWdqpGjjRbKCPkfASReEFn",
  "key25": "3hVxcL2WRACsuW1JD7UDBtf7JhDT5KRu7QhKK6e6AhRwpvfhuPSm2qoN8RnyN9aSACfTBzQcNEsBPK6UN8Pom4sR",
  "key26": "4XiQFUmZLhkPkoGQL8Vp6DdvnJYc4Z1bHdXjRwLymc32jcDMHbXj8SBSsCsidzR3LjKvEeSmq1tiYAbRGQKm6f4A",
  "key27": "kAnKKN4H2Yoexa6F6Dr3yx7oVMYTL5rYPSGa3AftaCbUDyJJq2LffqYKDenTZz5jZRakydMtN6CeQdbNhc19bDM",
  "key28": "5GuX2StZ1tGtbxzQRGZnYZfpjbs17FbRJmGfBimQTLPWCVk1EA4BKKSiouFCvD3JWwa5m7ptpDfHbuq8ueKCh7e2",
  "key29": "2Y44LePKFNZ37bLrbne8yS5D5mRBiZSUL1MYZ2gyAS6jiLgk5CmQeYMdQDDvd8fejPvBLABV8Q8XfH9447Dc2Y1f",
  "key30": "4p1BaSs4E7cB9TLaAmMXPJEZGBxXP5uXNdQxcqgCVfHNgPVwoMhAT4N3AhAYUpYcRUbneErYPBXFpGse7Biu4GPF",
  "key31": "312am5aKfoosmeWXdHrFkLKLL7ux2wynmjm89FSUw31YJx37PcqYoKgXDfmHFjfn2rK3vFMK8RRuAPgu5PfevJ6z",
  "key32": "4aNAP7vjxYRTNC1CxzC4mG2VFfPqP62xZ4a16LNZpemZ3b3RNbNTejMneEuVMv3J9R5uvJTrEB5y3fYwBzWHCZ8L",
  "key33": "646Xj7MKtVaq7AN2mwPUgjbish33kco8RZagQFEDDRwQoK3eiT9JHtTRqt8S5BFEgsv6s6zQeBGqe2VYhTNV7GGN",
  "key34": "567vp8gC7ukRDTkcrjjRN2FL1Ji8iDNrLojAxj2vQPrjoLoh4r4zpm5q1YVUEqSg2SYJpU9xxThTZmcpBxgbtWGd",
  "key35": "51q3jATbh2R3AmMWYS8st83fBqRMwH2tojufRcaQj4QK391eF7egvuzzGZyZStuoyfYozWXd9WPQRdjDXS2GnTsx",
  "key36": "5AhwpgjJPxRjeNtjLnHGERSxYDUcgHMVxoSGWZQJiiMXdr6Hw8s3Mn7HZcyyJEWda1PgbrcwFjb13bPPVro6Ciqq",
  "key37": "uBVJqtKzEH8UavYRuGg4iRJzY1GgVAHWjYQwvbKDodQQnhqmfQcZf3miaDT6Tu4rh3QXqREkYGSnyLw5kowd9hu",
  "key38": "2zPxUBwNHMxLaoaxDp8SnPYmzk3HnJ6SSvHgBDf4GkQuUk2FXSfVrNSMNHNtGjRYZEmSjG55DQ55aD7XbV31eJ8h",
  "key39": "5qnGGg995KKkDsEgaYYi2xtyPB1GicVsDQfS562v5xCfQ9gZzcNqdXVMVkYkxDxvqxiDwR1DDZvG2UxZz3g1mu6v",
  "key40": "2rS1AirKVMVHtWu1oEECwiRzwWj96Ci4cZXcARygf7vAgocp3pCypB3aX4o3k8smQAk9fQU7szDoySpD3imX6fDU",
  "key41": "4mYdKV2gBKxgfAsp3UFDGiv1qkStgV4qZ6wJ1L32cYeRdSbMCxmy8ziUwU5n6Jab68NrDwJCMtw7UisnbywJ3ohX",
  "key42": "5rSoEJ74uHRdiv16eBHs7FC5K5apRqhd9M7TEwzqDD3zaTqvZj9Ls5GeNr4K3m4PFo2PcLPJSQyjUUs6aA7ycXwZ",
  "key43": "4QCztGSxaRWPCD19ToParJpLA389X6c3Ee4TxSxMwfuiSzKVnY5AQxFWHjP1gXFr3aPcCCshk5AoRJYTmRNz2LJS",
  "key44": "3vjYTKRMeANoKGnoGLfoqXpEXqqw7xwnTJSY522eST9GXAyrFv65HzGjbZuHUUpoVaVENCNVetW79sM1wCqx52qM",
  "key45": "5sHs29kCzX6xix8B2oXoJWkLR4tcw9qJTdTCz5G94Fcr4JpqxA3Hr3RfcbmFNT93f9G8boV7kNdEYydPTdnBF63g",
  "key46": "4cVJKvwD6eCpiYBCx47YEYxom8kghJRfRYfakkDJ8NtrY2TaeBUY7jN3ZeWYEP3LXYcPxBZYZqWkSAiiLApa4r8V",
  "key47": "4kuQH1gmEYv2Qw4HGDun4EbU23EneQ5YraLGLQ2UKTkpuE7XaMtTPB9vq6RDSp6yQJbVrWrxZJ3uTheyLyuR3PCh"
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
