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
    "2QPbwJQipqfAchysrKiDPxHmPZznsbSjinbznKXBCx9i9uCQYYtfvy4QBU3svXSKQyoTNQoCUcbVkD8wEzhmGc7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29hRRjofwKRJdjAJ6Vs55RDyGkiroLdTW3NqnocuYHxFnwhsotUAgKywe8z31b8jisN1jKGhfgBt4XtgmX8tHckK",
  "key1": "w6q1SrCixBfQc376LuZupom79Tp37VQqCKdBvRQ7BpVWpb933Cq4cs6PTc8Dfu98nvdnz3KcFKE8JRNuUx3PS9B",
  "key2": "47JWE4L8TNCu89yLgCK6VWsxBxqcYC1ttLCRT4HfVHV72f3o2poaJgFYUYL2ViyR8H2vnzEWpw2Uk8GTqr4Jctr1",
  "key3": "yWBFn6YmiNiALag7qMXKPjhsAGagTe4rP8WGAxonTnHPuHKYi1SdTGDiY3EooJQE3A1hbdvsX3WwZx3FD4eSMP6",
  "key4": "2Y5BuBxh1rvKcfvWG43sMnQ13FBHYaJeKVwzZAL2VLtYKUSbPp2LNHrAi8sDmP3uyPU5JM4dZ2nVWsuiNi4vxVGy",
  "key5": "3BG1oEoekHJDPpddmVdPiqPhhDhdAuPtP58GgT3PAonZwTpTLcdFaFCL9uJVcGVvaHN3VGEe6gmMnPo5jhR8G7TK",
  "key6": "2PCV2Yg9DjduZyC335SuCrrTsxeHbsN4TmMfMj1YA3HBtCKMRdee4Bc3SBFJXkZGT4Qyhaipv2UQE7p47eh9dZsP",
  "key7": "3BCVKDuha4QqiUsZMqGQekvtv6nML3QN4Nnw9D9u4ZQJeV8mJ7NPh237MMxRQMR6N2U5rxGRTCRhQ4sT3pDuumES",
  "key8": "3yrvuvLcQdixuPviXYAV1DNCKqTkQBLR7iW8EnxtXGCT1NUGAmbyN5feZLkFShZ7uQCp8ggybswVyaAcFuykEaqA",
  "key9": "5uVbkZsU3eHLrrJevAswj8DB8gAP1vvKJXdo9xhgvGDG6GFApXJmS2KawLkSw4zBqqagQsnsAWksRvNenFtuYRvD",
  "key10": "54ZiF1yUiz2xjf697SDj34jRSRyGEDGRK1aoTznpjFMeWEVAmPkKvKM3FpHKrpmNQUME8VFfpdMKFJqFVGKbv2Rt",
  "key11": "61DBakKHubwkwq23NcZYg8CLkHG1GpsfBuSBvMQ4pqmLFadXGofw7vVRwMMWrsb16YAShX5C1FwiX1wdEQUEYre5",
  "key12": "66yfKbCMJjRbmXsqCzPYoksvg1JZXciw9yTAsTdwHSmXpJA2ZHdKFKrXkBNiemM7gEDqqcjdRhNajUGotrBYdLCM",
  "key13": "486B8ACXZZh3CmpZBUkqo7ghcgtiLWsiVVAD3FSjAzaZUU3G3gYnpBcY9huotXvSSkuwbzKb5TF1VPdaFVe1DBM9",
  "key14": "4YUZE637bvJySGG9ypueZMzKBKKpLidxWpxuYE2xeqEwcGfmTZnthaDLS62B8xakKuyS9ZY7g1kGhbUqZXesgjj2",
  "key15": "28GWXky6TYFqeR9wkDMNJwrAbnzCHBBiLLgJdVW4fsWcU9bixApvejaUTqNiknt7wZdimCa6NLVbdWkmfxkSE9B2",
  "key16": "VjexhXnH321E1cHLz4PQvZHghmRMJ8KwqbbD7jndTCUn9cGpPFDJkKbWHkQydGVeL4XtuDvG7dnkJjgjgrtxrAe",
  "key17": "H3XkmkhSoSjUdiNeFqTgm53jm8U6a362h7nr2LC4YBMfRjQWoUZ2D9RxkzGkWTKVDh5imb1G5P6L5XnkuwCnAHG",
  "key18": "3d5U5T2EcLgqnNdiWwLNqeHx2jXSFqeoQKJTQo84UehpQ8N3cSDiwjLckBjovsjf5cUdb8BZ7ZxUbKhzigE2Ti7G",
  "key19": "5kmHmCisifQACgXFRAx3TNAhB1NzxopdgVZbdAqApurWhEEDyg946jqLj5feit9qBKnGAbDCnirpLvonK1zp6raa",
  "key20": "Hj5rg8iVwDCeN2dzgNKMpCdqj7jvJvMBgi4BG3sYUiVtsp3w1YfcWnCEr25EGUndJ3CPgi52kHhkm3jzjBBxXo6",
  "key21": "4wYa4czca7ovjpAJng9XAwu9GqQyZmwMRLT6qeAtkUn7h7Q5Zchfp3Fkh9dRdBtNUhbtEEBGGBDWAQBEEZatCPbW",
  "key22": "4ye8oTzwQXx4zKnNCtDQ4udDAGS3uB2N65nCKjGADSPsaEHzHCS6nqWXaCmuDSzi6ApAHnLZRnwTvYp282nLbgGJ",
  "key23": "2aMhbJQ4S8s6upHt3bMwTUdMks75YK2QDGPawPg1QfEeWtxqTpzEZfzXnTBknmvtCPHVrMG6ace64b8MiCoyLuZr",
  "key24": "4DUUVxMz6WbiBsH494AqJHxy2Lu4Zc2R2vRArPAqw9HD5pMzKfRgWp8AuQBSxXZqZymsLt5GgF8ba6hWD1P64B8w",
  "key25": "3XFVMcWBYJLHabmLZ8CEbqseuHhqk7ptkcn7b67JoFXrgrDVx3fTdBQ2w5JCJm7iVvUKQ1xrnSnXDB4HTe5Bq5Vz",
  "key26": "57hBzh6Q3tPoBwWrRP9ncXyP7op416vCieox6ARdrLrqqkiV7GLwyp3E9aAHFCUWM9ofuRcfMnxUm5DzUCBbsD8Y",
  "key27": "4g5tiu4DRmjNpnf7PRXJ6zxrnrEe3nLodWixHWU2SUyzZhs3XaNVt7PVpoikM8R2V2m5PHP7dKLZ2EqouEQAdS3h",
  "key28": "57CW9pw9kqQMeFRpQZQLx9oPuj9AisPnWVeWB6Wh5yop3VFWHsNzo3AjkN7YzwrUR9jQN4Ek4rJb17JzYtgTbgH5",
  "key29": "49m1pqy1srhmj6LeB7DWr1HWcV9ADCs5CxP9PdbfV53Nzp61iMiJMu1jkS9p5JHMShRjLLDsWDkuv2Qi1LL94TAK",
  "key30": "5fP2ET3ySnnZQLNQWp14izW1qbiFuNukYvMpeam5h2rx36VvGoYnCbWepkbYnT4itM5Me4TMkt8kLciUDX2ho76J",
  "key31": "25Gx3PGH2eS7J582mqtHFzPXLtM1tbq43yvgfMsk2J7GbkZyWacNSgDoaAbhWDVSBFTx3MLLPEyerjVgHgBpSXou",
  "key32": "2KiZkKWptTEwAKSHnVD86kt3aTQ4NA2nTFHvieFBq27WBGzS1f2myiRhS58s3Sm3hQietLrqH5u8yMrudzQb6izR",
  "key33": "4kHjtJRFJksfK1KMzq6hQpZWHPp4vEkfGkLWLdXKBJYcE1C1Pr8uP3zkJEe6fnMCwFArcn5yAJ3Zdzibc5CVc3y4",
  "key34": "211mWHuH9gZChSitNY52x2cMaLxaEjED1BGWCkrHJyFKqTrfkx5AHVd8MNBDuS3Xr7qpAke5gUNAm4BLeSic5Brh",
  "key35": "54oNgBiKXoMiuGEDeD4pEY7zuL7CXUdDLUzSmpsSsrhpRzFPsfvbgKEqg2Hd7sFBBKVM6ZjCdgR8uj4L1JjUj82Y",
  "key36": "57eWKAWYLtT8e1hLddWVXTbipDqSWDf1uYMNCfNUUN7em5nM1EXK9TvvcHhJMaEzcGtGhYdDb7sHKmmFTeH943oe",
  "key37": "3jEubWR4YCYmQ8ZxqXHRFk5Phmx3cg7rkT24t5jp3KrdcvD1hwjZBqhxDSb2q9bMiaT65KTh8f9ZSwVLsfjdtgyW",
  "key38": "2SS4od59rbyzhR2DsHQf9MdtmMc1hMmf1LpjhcjJZ1LKVaZQybMNAd2fC4HULT4XYbTjPHhaGFumsbxdeV7diCeJ",
  "key39": "U5haHtXgEQe18YRWq36tQpg7XDJkir7ckZfi6PFAGiRB9kTXEPN8nprLG6UPs4aRvBojr2jwApiAqhJeUuBLy9a"
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
