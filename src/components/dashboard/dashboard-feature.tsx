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
    "5eovyJsDLjGB5iBK6qQQ32QtJyuxjShSS8TS7pograP21JRXRrjM2hBsUdLNQobGNks8LQ9zEm5aWGWWuXtev6hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RgTo7tNAbLQdNLaaEmzHWR1QYFu945CabpeERGykbxzjFscWFB6pmC6Xq8NgaD8LqRHNKnix845X33MVgQnncef",
  "key1": "5r7wMUDiNx8agHpG1sjLWvSR8SMZybtHN2fw5GrSN6CHHbcJ1oCx3KkSK3KDtegrzjLTTZALhHc8KA47BiuQKPBj",
  "key2": "gdYJab6qv5t9DrFrdCbbU1MQAmVj6Fajop6PoCTbXhC4sJaA3LbpGvjtCwZMsVGUdGGTY79DL5UyKyeSMjoyNhu",
  "key3": "3omJn3iu7tNCtS63JYMG5biHASbDH9FxS7YVZTZ3HEaZDwSzDCfpQm5vaG7unrJH7hzRevkNVzZ1bMtE5uAeZoZY",
  "key4": "Q6Wur6jYJrwwsjtRozmsKxBCVR1Xupr8d8nJKKGecUmXwjGvTZDTzf4kN1mifAJGDUcPjw2THmAXLWcoRFUUpA6",
  "key5": "5ja7n7gpqY9ogU73wkwrqkkLodHkj9MhdPhSahPc6PdRHw7cBGDVW4Dd2fa3aNnDAY1kRYCqr3KvFxEUT9ejWLhT",
  "key6": "9PnjPtazyF3dTKPCWfB6QTJQ58aTmmskhd9JwmGy5j6GRsw8CetEDsuwyvus1UNr98Wg1k3JjEEV7JnAy5XmX4b",
  "key7": "3PXMqHt61S5NeGomHJUu48mosUD14AicZK2M2SQBPf8EASAxBbYD1VXwqSqfh7mnGkTFANVezhfW624z6pgw6XR5",
  "key8": "36dfLGJy3HjbJ92NKhin2GCMFpYu4JYoU969em2MJ1db696aYg3y5yLQLrtKkNxZVqyrHCuJv8GGDkHuEoDK68Lb",
  "key9": "XKDmrN8CDA63PJqK2Zo9gKMHzKBBPexzMVcAx3HCKcGZH5mKQLfhB5WLwSbD9TdzxNB7v9DnTM1QWzNijQNXAnX",
  "key10": "3Xpa8ViKznWePeg1pZSzAGCUrVUn1o6zQyERmoPg2sPxEfA86ZKw78dzMce5gzuroDTYof6kYhH6ymFaoWB1N1Co",
  "key11": "3crdjsfk1n251NPgKaamxMM2FBPDpzZNos1euqbxNQ7uMorcaP4v1zRky6HhzXamNHa8bd2Ccp6cHNDQwZYqotUc",
  "key12": "5UniLavGUxnT2CxkKzxG7gWqMuuLQUk1L9nfFDH8BckenuqsPpqEjH84r16oBpALj7irw2QpVhHRDFBXrNwnaYyg",
  "key13": "4n5YjkEgSBMDM3BURgQTERg78xaMS8SXmUnufrtrLVwKVMLymMx6rNSpKPP43mso8YgVMJ7Xr5CKYQ1iUpqkaVUN",
  "key14": "4ic8rKGhBBMKnXP6beYdWmbAKtsEGWnpzEB8FXPguozafGdaPjspAx7poCK8xcppK834zUcNLBVaw6Rc4RKqdc1C",
  "key15": "xskMvksqyAxFJKgBPR26EpZXJpeFe6kKbidXzq1nocpN9uDq8c1n6p8gcXyJj1XgeQxutcwvbrkHX9khq6p4zZB",
  "key16": "38HB8XvPQ6kyDPo9gZNu1J7HrzcKXkzRLkvA3FysHubQMWbi5afu39nszUnkoY2ocxQxaJdmJ2XkQtAczxcDyKej",
  "key17": "5tC6SqJMqi8FTA2ovs3BmKin87hkuN4eTAKkQDXDq4Sqs1gm5H4pbffiyNZKbGCECVCMSidLtSe2MAorGBAAaanx",
  "key18": "4725TomXyXaZpoDt9zZxPbnWHFkENSYq5m2ZHQAioMCE4vRhkg15vW7M1Ne2pdQHPjdvTK2bXFhZb5nopFZspqD8",
  "key19": "XicyYtCiFJHmLwW1fuCVu37f7PQbMhr5YbKYkHwGAtaHXdgUs3zQySfLyfrftjdEEtX2qY9mrSasmdJ3tjtWRGr",
  "key20": "qzYadFpP48UZ1gYp13daKF5xY3vvZVPbBVrWEb6ubrd4oiAFTws8b9CHqRUTmz13p4DXVex3J9Bsdvz3u8sRQBi",
  "key21": "9qNYksknKYZWBSbd7qaS9AxumWVbsD3kmvNBWTG2iubGyZE6wFgFQ6ao6rDp65bsFeDZB8Zg9btLCVyttsG4n6M",
  "key22": "5dXvRWmrfhjDWeC8t8jFjWX8gbqaszpQxCe8qm1D6DcE3fvpgm6C9jpmgGbUiRT7u8ByPAodx9B5BqqwZHvpQyL7",
  "key23": "46Qf55Fx4XkLUYv3DuCxVoUrVH4oJVg97kUFdGyXuvXA6ycSwYaEYJBQU4zZCnKQEkYy8FEiRCjBtXQuTnsKvRyx",
  "key24": "6x47L3W2uNeZFJk82RrgEY9Y2kD9g6Rn8kTwryUFU4NeePv4pL3UK4P2y1Pquv8RcimfAkSuY4cKk8hh8vANeqC",
  "key25": "y6c3cj7cG58AxZauSuF6YBRAn6PFV3durtxt64kErGVSDBLds7YWfffygzSy6yhTzPHNkc4Qe1TcT4XwpphBysf",
  "key26": "2pqhDvidSUYD5wZ1CEdNGaR3yNixqyALnLy2aBVkZ4pJheW8JLuETXwTVop8AyESdENeUXuREhWbF3GmUJ3mc1he",
  "key27": "peqEL13EeS2tJuV1EkQeNiKhw1DuZDWUY8wVxgAE8sXag2bsE48Sp8KWPSPTiSyrJiFwewfieWcygVZBQiuPtao",
  "key28": "37idTpgFxCZxh5Jh915doyAHPPNAsF1fxv761oxSWD3zTwrPr6R5mXqizqnq8pfvnrfg4M8AcUAxX2JrCVBLSkYv",
  "key29": "4XPrPPH3eNmEKxzxgsvTxjkc7pFMQ5BtLkTY3B4jPhgtLNy18nJxwwnWp7UTyeSHcLA9Dddb2o7Dn4FkUrGMCXer",
  "key30": "u9KxghugVPJt84xNHcbtgSV15Yq6ofLDZEQ8svUeVvexfi2JhCYu5EMWMhi7etVwa3og4oqXn12ScT1yinNpx8C",
  "key31": "hKNfzQMyLPnZ8mCpkCFYjj5kG3ZfffsSSQXkNKzvq7NZogf5UFrHY64WVTMEtv8ZYvUs8QtHP5eCZu6UySUHHW6",
  "key32": "3DbGZmZAVschZdXyfBE1BjxGsTnZeEF5DbeSD5ZrFZWdwMX61TGN7n9uPjtddCcmXjf74o4AXcWFgssRWRP8syun",
  "key33": "44SwgADpi32mxRvCqfzd9VZFLJtnukeBgNGiVYrDmrskCAh4AybLpr3mmknrtmZVdd5jFX7uFCTSYNjiQHWj2UUw",
  "key34": "abBZcPx2VsbQMo2qwuDCiDTF2AocRMsYfMCX3NEoR8QgmT7r841nHo5MeacuTjjDjpgf6WBnJMypgS6kfcVgCLR",
  "key35": "3kDhuB6HxE8woQf8pWoYBJdNLSXWWrqHAv8b2sGdCAPSTwUtzagvogL2K7WS3Fg5JbZ4U8cSn8GXFMar9qAAZyRE",
  "key36": "3Dcw4dMSEaqTpz6grLZQMj9vUyfDEJcrWXjdRjYsHzRt928FLmD1jGkVfX8Ef428pYQCNwSQ7oe31P7FgoyYg5FX",
  "key37": "5H39djk5kDH2y4o2CkeLdaioNKxFJ6n7QG1bTtgAenHyegVhxXhJthDBQzR1jbsZwvjSURg6KqProMzUf3ckfAx",
  "key38": "4Y6dXRRAC55PzcCXdNnjwijMdSXynrd3zwfhyBwrGRprUTqku6jXzshoUmraaHKoH5pDvbu7uWTnmzorjr2KL2rY"
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
