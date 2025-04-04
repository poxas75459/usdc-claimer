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
    "63wCpmMgoUBoWbsvXR4C6rkZjnv1rQkApQZAwVUmrDXp4BFeFKKXnPkuNuFrEiUd13CHbJH8XKiDXD7Yy5hfSWKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eRfzX7gv7rHqqFmFpVMFpGaMP4gXvGAoEAvtJDusvmT1J4nu65tQFFN6UNpx8PEFrDwfWeXXoxEuc5CHL91hQ2w",
  "key1": "2fL1rTmj1SmqZxbEyT6hdQWgKTCnymuRcaKr85P7Tsp1KWKLKeQcp7kkkUpCZUnHg5YmfFhepFfQW3d7JQRXnjvC",
  "key2": "2yEqFqAj9Wjh2ubPpj3EdMqzv143GKbymPkPcoGyv9E2wEfMFvwBnxbLJDSSm4BNkaAkVmJG4JQ4bkr5MhFMw9bo",
  "key3": "4MNfpud43gXEbrLK44REU6tPMJmzxBAr4iHfTvrPNiW56QX5qDEXMifpunYjdiMeusKXTkEHz9gTd8QpAyZteTmm",
  "key4": "5JHdmhAQKzQWR2FBrNM14vg9H7ct68uyYv2bQ122huh3dXKKd8jwwbYyE9mK3XYYrbRm79i4RiM5xMNSo46bo5bw",
  "key5": "2odqQGkxRuYuDvxJbcGRMNA5GmLTWTcjWv6HrS8asvMoPFsCvCFup3PmVtgDfFN86jpkN6Vb95SfXjfxo2knqxEz",
  "key6": "3ussN2dMuTyHdGvPjwe1L5fLV3R5F5NUpi5R4THpR8sUyP4ijzvjTZMajiQFkL2hGB4bMuRpoGqpMuKpva7F1gAm",
  "key7": "4fVPyAQq8uEt8atF36Mk4n8JxbHdWRFxrkP47nXa36qWGkZufCHynVpJAQwhQjdbS2yoYvmZDUqbCndy5mSyaV9A",
  "key8": "4yDLSrc8hGE1tLx3kEaQPVNAsF63VqbTC7xP9cyVGEm4U2KxcUJbZaBGBQ8F6zaq1NTrSD5eMMBmV2q6FoPqJKB7",
  "key9": "4cuQkT81JtF1jyxiQim5MScckoGHrJCjmEbdp3t7Sv1uUisnFx5UhMAtz5n8muFCGfCufMoXnVn8evcjh4tqMksg",
  "key10": "2AYdRgKecn466YxPJki3NDNKM6nk4PhKtH87MjYbaLseTB2JdQVZ5282kP2iThsoHf4JStcRZwiK4cNPkmSobJVo",
  "key11": "4pwW9Kd8RJmeMWubKzistgjan5G4BDX87L3tv8KVAFpxs7NGbJGiSt8DLDjc6Km9Nh39W86PW5Ct7CREWPHC2xVY",
  "key12": "3fAejv4vLyhvbUu4wtyoW3aDcML766XW3YBNhP4jU94yhcu26RwGp2Qx9eHS8XpYzi4tguMGmNz5ZNFsNL82Tx26",
  "key13": "3L4vqqgvigMhGfCJTSkqtroqYCsN2VP1xfVQNDBrMbo1nuYreGhdiFdQp1qP2urdj3p4KkQ1r7LEqdDPT16so32y",
  "key14": "3i88beRjjK5Ht5zRTMRtxoqjNfR7cUAkEKQCWHE3kT4uJDojQfSNvmLWwoQzu7wgXZQfXkB2eE3cEzYB5z314X4K",
  "key15": "4kTCU39L1siuYiuSbZR9yHNSbBor4S8SvhTukePD8F39kjsHJo7ju94kTS63XCXSpygSWe82MCYutPe95cex9LKW",
  "key16": "49XuGmqYWMEwTiJBL9uCwPSAr5W8eKtSrKuujUM9ZTGwr2cpEpjCSjZw7nWHF27ESjYaogU2rLe2DAjAV21NoDyK",
  "key17": "jBTKXE8bocVa9SncqgNNx9ojzFqE2ApKbwzFGg78N7jB6wdNqWoEc6Kx8Bo5HaUct2QJQscH8bj5Avsh9h97K23",
  "key18": "29UEiyUGtUNo6f5ouXzBSuGpf8R2YPVRcfazaFy4W1wPE7xAA3aQf1qXkwXFD8UUv3tiofK8L9zRJvCfp4oS8u8B",
  "key19": "u8NVk3EoaPG4hCYQk8oSLriQyyn3Kc5zDU8TruiwuwuJkwzm8VvjvkqCXUosiMi3iXAa1yBJaGuVpfmbjbNnyhz",
  "key20": "Trzpskjt2AtQ9s8KufeVttpHU1irMqraPKavgKf9gFJaGyatXFbmwhiLPH77NKBpNffCEpjsPkmDiGHRoeaVJ4u",
  "key21": "4p32EQ81SgeNWKMseTqmDCUF87L6EgprJRRJ8np7jA1AHGN24z5wndGfHUdxBQMVFxpkiEfi6rER4svCLDReLJUB",
  "key22": "9EGoTCqPTfmaaC1TKSGFzWsmUk3HcXwVuZa2Mdbvq8W3GDAw7TL6RYjeYJLr8oMhPg9L9WaCK5Jq33xtHKNTJnV",
  "key23": "4RUnTKMtm23zdVHcsHXUQPmYSDC9GaaEXo4sGchDEw4KpFofFiBia2Xxhem5Qvh9Hrp8DKqLgZHBKvYtXNSyx8F2",
  "key24": "mXoUj87b1gS6FUNgSr2xuKZYiCWZ5h6DjXsYrMQPVdkKyxkVvpd9TBYrPkjgysWDr6tkn3uHcd1XyEzPNiwo25N",
  "key25": "5UrfnLct2BqjQToEHxvSMWppq3fwqQ2P82To46WkL3K5fiAvLrKugYVvjWBBR52W1awKfsoaM17sDTR1WReEhNDD",
  "key26": "353X6yt3uxhui1Qaq55DLDTGXmRotekx1cp3PeM9wvyG55wGbECWjKYqams5N152cqp2DydupBq25rpy6wCfefgb",
  "key27": "5BhPQt3whBg1vpDS69Zw8Yzqz4HseAQtadGGU26qk238uFLUtQHZKPMpsCWWvP3JzQeWVkj1eqqZJsczwKQmawrN",
  "key28": "2znnNAzQ7AzXV2KDYF8ksbai3mBTCmg9CEcXfePzDp3EXdBwnoYbU5rcVTKZ9ZVTyqYBFJtSr7oE8qMYj5VDbbak",
  "key29": "2xYMNRRbF7d5FqartUXsQuAd9J3xtR62tsgVMu6XQ7B7msqgG4fsiXP8LgHh73QLCfphPNm4rW863cSHhLa32i3u",
  "key30": "3dRMnWidgkRJkvtuR3aU2PEfVrda1UFJgrFQ74hHBueoRqnFnoQnabAfQjLV92wpJ9NoMxZJtfeg5XNm4J7TmT7A",
  "key31": "4xQ3fivT2D41pSRym9ViESndbV9sfSxBD8WQy8qKACkbyPK2W1CUkddKwjU9XUooeUgHAyruBwsedZHFG5U4NJ3K",
  "key32": "2He1beyipQiHGMVfDvSpmFdEWHErkvDJEQXi6XSvh5PAu9vmdd51AdidCjM3BPWdv1AR5SQTWDnko6jNo4J8iBv1",
  "key33": "29rSyk7bVhtvFVrFkrd34Qtt28dy932n3KGEikdAWnYayHy9H74kVyTbkW5GQgXby8NtQtrpY4ekikNy5VRNuz3w",
  "key34": "UcDSd7eZsaHSFLETnxxTN1D1hp9KMUzXnpRUtJmhuuSzMiwBVAC7UnuNFkGN5mUScMkChMUPTiBd3G98zVhP8af",
  "key35": "5DgAMkEDG9QmQuEQwQhNqRyf95tV7kTDecV7ty3w5CQcuLvwUycw4DPHQKwuuRDJ1G4HhTCNx28hPfepkzcotS2n"
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
