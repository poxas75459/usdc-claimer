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
    "3by9LYSXfrCZHDFo7QyGrYD8W2YqaqCoPwq5AdR7894b6TA2zdaeKR1v59QZYU5zTMh1EswHpGWRid9Ny8T4C1gD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f51dahGte6DXvjPnnuxKX9thAYjqyXDq6HksC6mY8H6TtRKTQxEHMaStcfXYbU6S44xakrSm5x6UX424qZdpbmT",
  "key1": "yTfajBcyqFYUGpSwHLD9ULQZFfgYJiVccaPtgqdRA3TW5bzTkgs4RKbVNGzkqEENARuWqkEeyJapbEXDyLNFsoV",
  "key2": "yzDZasMiqeG5zzKDdb3C5M2DfN32P2S6uF8VogSBdMxSVwNtmJvx3VWa22wGcxaPz6ah8uv8uP5cJ5RbL2iCCcZ",
  "key3": "64Ao2JcVuPWtmQeqLcbbmuFW2HFMTneyprBk4Ddg27Au59hQyUeUPGLfqWK9wNQ85GQ4Z2oJNyb8i8MnEkaFW4oi",
  "key4": "64mkorNmz14MYesw8aMJ6P81S8Sb6Wxz36aZfu37bPDJHCvK8eNsst5dvNtFhNYLj4LND75pq8jgvmBf7XrT5WWT",
  "key5": "36YjTqFBYCF4AZ1FFtE82qoet6EwopNSmMspAUoxb41e6YuCZQBzXs9YFotGS5f3KrzfwhWgknGt2aDk4WvrKEyK",
  "key6": "3KyBB51xhiZCjJN8yRWzbq3uS1XCv6HKq8UfVq8azCYfCyuuot4hYYPZASxwS4QpbyBbdsSYw7pqn4JyLCe65JQ3",
  "key7": "5T6yebMRwASXD7pvcmFifi7vMGYR3PSuYPUgZzR5N4WZ4kNkLFbpUc3J4VqoXgPRAW59m2FeER63xq4DcfpABHdG",
  "key8": "3kHVGJs3xaQeKonSnsUMH5U7N5Eb6aKeEkkBSUzL5yS4BwgY7QdoiHBQFGyCzjJnLnJq1tcjUdWM7bXDcynnrQrK",
  "key9": "3NoRJgmYDS2vMN7P7d2cgi5zBMEx95DsHSsoZESJvAh5dc4aMKeuCcAGEjHajkCBeyh3zMvuuboHiZ4n2duuZjS3",
  "key10": "4c9Au2y1JfyAxv8JbM8Yv3N7CxYx8F92gWFEtaLKHkgcx7Tg3YD5gXHZa4ceHiP4B2D3ahSFw3mJoSYYTEU1STJV",
  "key11": "kqE9xar1hA3rqTEEvS9PLRVcu7pvyQAoC4vXsrzqdjJKQUPSU3thg8Mh8tF9Tna8g4D53SPiXLAA3PnhT4n2pbh",
  "key12": "3sNbvfz38wQbtwrdxmaFDYkveyhaaUDTboxKJXMa2D1Jnpxsqrq5qLGwde9wUT54TTTVBKxLz4jun6rw3uC3ccD",
  "key13": "25YfPTYFqKbprEXPNSF1TZhtDArUTi7KreVPdYpqtL6cQUfhedv7yNSA8UFfbVxZZCuaYg3EfezYAtveptdV8X1P",
  "key14": "49hRGiuXggWAzgF7CPZVRWtDrA2WLWw9GhGAMstq4C1uW9uWf2vqsVGLzV1mcWw8yKugFWo4uxvusJkqRnk2DRPU",
  "key15": "4onqQkrekB7GZWvCstP3X9puwbJbR5sg1V5WeGwcieb6ie2qBKu2m8ncq5yCP6eLSv4DHsoW1FEU28Qvy6nzGK6h",
  "key16": "4m7iXhJFX86s9kw8oJdYrEr5R8YDzZieGUrnPMec6istvDrTakfLtnNv5KXqtEyMrFdnah2tBt1ZJpdmwnzfuo5t",
  "key17": "XevaEAZ37ANkNRBcwHtiGzXSj6Y4N9XKDyFbeScyUotCaoke8p3k3oDy7iLRvnXrL9Y9oPK2g7uk1E45VYKW9Ca",
  "key18": "3X22ZaNSk4iv9qSkcNB46KTWgjUmrtpdbqhK46DmDmMp6fuR3cqNar9BmDxxcTzZk98WwFSAEK6GaCc16ghFJdTK",
  "key19": "2ZiqKTDGzjvtD4XRV6reQKhq9dPb1XdKx3HfydQGFsBQr1ptkX3rCM6DA7jdEaWcAmgcDLc5nftmDp345kqSPQmh",
  "key20": "2eM6xidewEekHeqNPjz8noWSP28bFuyf5VfMQ8Mt18dyVsaG2NDYz9yUTJmECERMaGjJE6A1S483TGQGhA7gqen1",
  "key21": "641C7GXYyjForHqShhKmq1rhm4hq27LSLynFfCsDiTsFEA7qKW1DXoH9RniynvnxHRY4rBoiK7hpQbiE1nk7XYdL",
  "key22": "31csXpEp4FfpZrygDvdRvWYCMUYuTVCf4UfZpQzeFtvsZkustPCnZPBLNtE4QFRpQKYfTGg4ffBSXYWxFcoFvth6",
  "key23": "4QZpsE1nEhrqXeXEtT2QySA99YfAmYKSMmmNiyip1gRX86qYeDiQx4VP5HBEogjwYDu7ZjKcMMcPh1zvHFgmKLBQ",
  "key24": "2XMx2HGDSvWystnUPUVsKtqC3S5zVxMZGEfZUwKwetGkZV5SMqzuiCMXFiMpLVZpz6W6RJwbRBp7N7qxLiecADLb",
  "key25": "5dCutyCrHxrZqduCsbbMEs3Mr7bX2aNfuonbtmxvRAD6Xnp3ACjwLBsFyVAL7oaC9j5PvFAjxF6vNLGAXAQTLrf1",
  "key26": "3dwhfJyizi8Smxba794dXqtzJM996RuXMuDcxv2MP2wvhxpZtys8eUNZdw5f7hEVwwmMKHQ3BVvcSaMbBkwKfJsa",
  "key27": "4A79a1YaWWzpf8v71Q6VRJPLt74JuNtusNcLPEkMMkGPH65T2pw2J26sf1xVEEAEBnsxTTrizkW4BecZHEbQ1Hsd",
  "key28": "4xj5Qqf3EosbAUiJQTTPnQ1L5wLm6bSrQrb2geimDcvnqXUYWvpV4QEneB24bg2aLRMthj9gymAmVk9u6EQsfeDA",
  "key29": "3JvuzgCQUXf7AJT927H7Kv3WTqmw9yhDDGDzFwnaAVYa2d7vFqnq7vg9pEaTwtxY8zSywqBE4tNh4eEb3ALdAd48",
  "key30": "4gHHuEKhFXG1yPxPyEtSHiWikGmETu6HmJYUZxoD3WBH9zV8j9AX4rDwBSoK7PqgMEqj7hSbfRvTUS9Xtbb7z28F",
  "key31": "2a5PabQZ2MyXVzCuvSh5HZkd7sXueRfbAYiGxzbdsiyxNJJSpmbitEDkVee8fpVCTvySG6YmzyxggyVSz5a4z7ME",
  "key32": "5ejZTdEKTYUfjpwnxrEqzeaYnZ5YYji8ALMdRoK2YLBpf1389BhM7mAQBxoPsdXkFbd3rRLdSBPKPPsggFKPEHd4",
  "key33": "2oiQ77F36fjjq5675VV5VFf3iqsGHEy6kgFgzG8j5Ls1Vw282DPcFuzV6MwUYZWcwFczPhszGhheJff7cLE1Ccou",
  "key34": "2MbdzUNiHTTu77Wioq3uvqin7ivN2ND4iwqSpiCyeae7BXnJbpxaRFmreknXdGmnYdPxKJyQArSJhLMBf6SF6W9W",
  "key35": "cY74AGHAxSE1RqthoZabg9HT7Qaachr2ZxhxnY3CB28Zs6vwBpquKoPuk9W8P9445ej7FAAAdZASxjfUmpcfsT4",
  "key36": "WVitz3zpFPqPEu2DTQ94rc3rCXPTKZmXTyXSBPJXFjytSvQLMkGFmLY7gYKFmnGoCvR6Mgxir9QWPptt9vAp9oE",
  "key37": "5dx9JmxWARDERMKD7rjXdeuf8XJJrykMZ1bcSYBn8wPBC2oUbppA3nbrUqkCCvsPHtL5dzWwWweGe5Wkxh3p4BU7",
  "key38": "3n9oN36M4uXRWxX2RXvdbvPbrQDimvCYRuxjtPNpEhbQAUpjj5RoHR8wCSwc3oX4EJQBEww8NrtckMXvjB4BzD89",
  "key39": "3ACH7SqupHN7wbPKLHrs6j9HzukyMGzv1cC9FueyX9JKos6JgrN7hHtVvH4hucvZzDeSRnAcehMueJyB5ggm8d8e",
  "key40": "2VPcbKNUW66F8az3aL2sPee4eWzm64pdopPUDMwoQJXX8ZWsQrKS8WYRq2RBArkhUES4FKPWqmE67pF3ghVToYJm",
  "key41": "3y4TgyjUfnv6JySRj5Mf5yjxvQKX6Wv619kckfhVCn5DuEVuDNP4jo6C2KadAJzsLU3aWaiHXQCyyCJ7xd6yKDak"
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
