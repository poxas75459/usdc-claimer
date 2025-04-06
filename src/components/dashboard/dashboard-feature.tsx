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
    "3vfkbbFGdNKFs49Dvq37g68SurMAvKLpqSsPhYdsCs66DG3uE6rShDeskiXAtb3cVUGBUdXceZXRNW6ExqkFXW1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P31nx6PtbTuLEz5TupbUYGm5uodxxy8LsqYLHZxq4Xmupk9ruMYJ84KbmRNTpwyS6kHgqAqS2GgvPJZdHvsMyuL",
  "key1": "4RTtMhYSCUi6yNDWVzq6kvstFABLf89Hf1REPTSp27Z6KNQCGVXacXSQuQyKfMWfA83MGKEqcjBHHskYRXS9qihz",
  "key2": "2bqdji16bHssdtFjixZvRhxxBmKoRWURuKd9tF3CVUK4sx7tQRooUTUuaNK1UB1KvvZrVFnZ2dC44VvKfzZfpLsX",
  "key3": "64r9wc8uwTANJxmZiAgpJLo1r1XPaRYZmnjiL2XUwXK9gurreuRPqD7eZLLQGqShJ7urZGGG52ppYaSa6sRVpjK8",
  "key4": "wpPwWbHrTTs1DcubLNohE5EDa2Jp7vhpmjaTxCwA6ab3zhrh4nSM5DJDZibbvdQgSBECkWvW8XTzXEHMNZjpJS7",
  "key5": "3GsbnBnwtHqchzC89wHG3rBNCRVzpXzifoK69se8aEFqDGWGsR1siRndcpZNGRVMFgbjTNQMUnKcHHkmoTfm9y6s",
  "key6": "5A6yFkYRXySULuVma3wUkkTJ2L3GcBYuiiHigXbjvkS79jmxVWaxmN495pzJxVwNBwCKHTdJ9x2bvpttacfCYh5a",
  "key7": "pdySwGPCpT1wRUsoGmjoerFK1S8V4zgGD7x6K8FDozrbxxDQS5xwdLvBt33VV7RDczPXowXAUdie5WmE91iDXK2",
  "key8": "2sfsiX86s5TTudcAeCHmWAEnteKe84R3JaiNR4jjtr1rp1ZWKC17t1wJwL35aPK9fJh6wyEddaGUdZhYfYMNxYQ5",
  "key9": "3M5pHxvUdRfywdGjTmpjAjhZRiYuAnyJzazcDWaG11HCFPi3rFE9jmoPhCbjoRvW3nbvLYi63GRumZqhmWKSK5rx",
  "key10": "3D6a4cb5qjazGAXho2ra4kQjN7W3ZpzcVxW6Hs2MfhmqAVEV1e3TZWeXMR6vv2jsZHEv3JC4fcH5pobiC7gXxe2M",
  "key11": "4w7C2ngbaqVS5kFtvRd6GbBFATZkm8J8UD6yZqVMztNQomT6cbheKD8ohmHGMqJwPze6G7dLWGgSo3N9zmNJNCcZ",
  "key12": "2HiwDkxp32yuNVyPsUvuWrVhnHa3nzemP34utxKjejZsi7mFW8D6UFePipWGJ4agPXCa76LmTShWp2S9TRtYoYET",
  "key13": "5BaR15Ju8NdE2AkqqjHi5RFX8wpRFmKMoqf669pF5fvMSkqG3LuiRkrqYR4SAyTUbLmAVMgfJhhnDab8vtU75BWP",
  "key14": "5ZsPn8u8eAF5SLWRGvK5zrd4YFkDk4SrBEtQqVMNPYf8LKeuFY1efRBLVKBb5oPX2U8DQgVMS14XrUeGZt2NuWo8",
  "key15": "48G2WS9rzBLixFzGkVA5ZTifB8dNBTo6PZfxLgY5W3H5gezb86oySHKF2DFmV2SV15F9LYHiwrZfpy36YQ3guDfW",
  "key16": "3RxsaC7EL8oKCCg61e61SenZhj8N5zb4Cs6dxLrGkRq944MF3bU8thWTmdWrjztukoUupvANFr9zyhoNHFgwGbeN",
  "key17": "2FP83CSf8RosV521QGJEoopfZyXUYPS7aCYZ5hbXVfaoFM7ai5M5B51c5dXvhdQNZhqk6ZvJshG2Z6Rb5mHnpBin",
  "key18": "4arLamA19fBYQYciUf748NxCGmQPpbRmdUvdPsNC9ySN79xf9zBCNE6x2Nn6cnMypvhQxEDa1GXBcERAcEtJrhJz",
  "key19": "5uobsNoypK2u2wo9R4Wu7Rj4rHxHX9o2pX47HErW8B4vhU11XipgTSj5m13nNu59NNdBUjdarhWsrKZazGxFqniR",
  "key20": "2728aQnXsi16J2VrKW15LUC49NG7DJF85ZyqMNWNg4c7HcMydfSmQi7Tc8YwEdSB4tZgSNdSsquMsYawPB3oAFG9",
  "key21": "3eXNexFnxxwXhenqrn6gjbLrcUN2xyCXdn84487cAC6Z21A8ooXH67WMMhLUYSq6EqvCSxYJ4Hkky1W4FawCGvxK",
  "key22": "2W3unnBvTWf73FVd4GWGCisjF66j3HUfESvaizfdmfJa5XGk7pZBgyuxD9cTT4N4vVSakYE4sg4Fj5ee7SX4x3eT",
  "key23": "gNMDLaXJ2TNmxN9mifCrBT5gYj4urhSNcWeGXAk48gaExfTasGV9xjtDHxwqxkGbyVXJ5mcHiVV5v8BBhCGpWLB",
  "key24": "46WtGUs4eGkUXk8JKPJFKj5niK9Msjj5g6vuqgw2TGaPefWZSqKksnLXsr9zFzWW8nPZ3oNrpBHr8xgp4dA5GG1K",
  "key25": "51sr9CGqVBkH7dsWorV3yUCF9fMJdam3H7Xekcr87WzzobeqK9F94itMbUwjr6MmzdnPspXvXxE1jXRPCTPjChiU",
  "key26": "5U9q4b6t4TLcWER4DbStfcG7wdaHn38w2XnXC94oJfVodLz9zJWFEV1ddtbTwV7s6nNmLZtAY8zkUkau8csgw5zX",
  "key27": "k8SdYHTnCkkN2a1Av5UBTBUYgfQzstyU5vNW1iZttQVqXetu9wDcgRoakv8cHNajLpLqDyp5xNrxSr2czT3R19A",
  "key28": "5ZXzoxDBUg3pAhbzQyo3LtwqK9mChDSaoyq2qHTKwRp7AKPoZE3ifxxwuYG1F7rbfZs8zwnhtAWen6h5UwYmx5BQ",
  "key29": "S4Rakn7icU27wTC4HF5T8z6scU3aNsyvUaNCEmxuGPBpyaxb918nYiZUgWZwKy9e2N7UEqjers84JuXjayXQLoU",
  "key30": "ZK5UbaYQMahsajb8AYBz3MuFm3m5F5Vkw8uoKttqNq8T7LyzuDrTQbrYfbR1sUU3VKpcn1WtY9r6ehAptwwgMFW",
  "key31": "4DEo8UZa2EQa2a6cDZz2xvYwcZJq94vG13YGGDwynRz7pjEZzYhnigmPDgp52M5sEbuw8TYcpftGSHrDrkNm4LWu",
  "key32": "31s8nX2J7AZDTq5sN8LL7sWFejnQ8cFcEN5RNsmbMSfvZdz9J3iy2WXHDgF7QgFiY6b2ZHjdBen3PcfpxAdzejxp",
  "key33": "3oyhUSAVweWb3unX6ejpv6A4ycmZs3sLezxrufF1PFLkArTsAdcQLodxdJQjPDrJjWRioHe5Y59v932E4w4KiGVW",
  "key34": "5rYqVVxU4zrEK3mL7G6kpdRVL3UgyNYt8NCE5kitTfzPzBNZ7sjwYo6VnT9qgokZRRRXK7m2tnU43ZiPRyLWqr3K",
  "key35": "4z8yz8ummYmrAXoGEXrXbBezbEpasqCp8scHph4fdbC3jnXXoPLcVSB2B2spPXU49hzzzTD3beoS8yC7CaAJp9z9"
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
