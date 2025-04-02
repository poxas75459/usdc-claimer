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
    "28DaTmPm5gPsT3sZjhEmchFjLvX3zpaUqhp88hXiCjEfTQ4P5GmotFLKdSggMSwWNPU6u3o9aqvrJ535seu7m5sz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54UPJjQ3n4aG1axMcXVqCZo9xUQTBCSbNWWDP3mzd2MomjLcNt2EaEBtrg9WxS7ZERa17eoKkLdchoBkvnfaUWxx",
  "key1": "2fekSHQqJgS3yugGyHVNNaZG51azjHdtSfcr3bZtN8YQxphzkNxwHdEifUeY1jkwmhtPuvs5F8QM2LWvjzkNMqi3",
  "key2": "JLr7VQLfSexnNCShwVwWETewMTUSkgHQnRzcyS6opy9GvhiDcbMd4tCJ23fBGUwbqPdp7jG69pi3vZv9WhKt5Lf",
  "key3": "3b9rvQwCYmuHUgFF21nQxUsRgYQzTfhqcqGDa7ofUQaaskisdBQZbAAuvQv2wRttJ5SGLGvtD3UpQeCExTayJVrG",
  "key4": "4LqAAomzpFT2VqNPpQ43kfyTZV7XYiR557JqjpxVqFNj3jnxXoEJuvWbCfd1WGuPmNN5HXBSaBpUUoVxTAF3wpNn",
  "key5": "4gL3R9itZ2KTVCBsp89JYz5cTzHeSTHZmw4NUATpeueNFXbC9KsPNkVqMr5DcsuYbJgfZauNvLUeus1BAvHXPqY7",
  "key6": "s246Zrxi9Z9ECSQFjkHw6RsK4ngN6uY5qu3iEri6wMugWDdrS1BfxpuHv3zLx4Hs5JLLaGLREHmdgeSSb7QU7P7",
  "key7": "SrC44ModLxijFBU2rnXatLoDGFZMvEpnYCtTmo54a56JPVGz8TWjctS4BLEn8MQdwSvUE5SAaHccLY8sMQKbuXx",
  "key8": "22suTawY8URTJKwzKcc7nKR5p1mnvJoN2qCzQikMYn4EGv4VmAAAhv3GeADMPAPe11p9jPChQbgq8RfK2SJS1GBC",
  "key9": "2wXk5vxi1GZaS1kZzdTtHxfdhVARD1aHUAqJhbEJNgyKhwv8xX5Pawe8fuKhrH1Z3Km6ajZVWpLAaUXjh1TNWbXu",
  "key10": "2jzTZvyqkc6CMZEf1ktCGaqWbx42WEW7pzBZ5ASSzkhnjCDbAKx56HP7De5fAw4HL9hwGLTyBw616GV81oS55V74",
  "key11": "3gcFN4mSxVQxu9cgpujyNWcCpwTtjoWPbMGs8j27hFnMi9BJnzsvNCafZBkPjYakchxKJ9AnE731Mbg9PLbRq8vi",
  "key12": "3jNnouBUiTP4Nd8oWbTjnu92nArXJZDwcM1Gs2pm8RFJyLzStxpxdGZ3ZfspuDwdFs6jXmBbXrgcvtQuZUUm4Dkm",
  "key13": "2GhF9KZ7m9yGfoHAT8BKV3AuHw2pxFzdhFoS4PmyQs5yEK8XT6fouvSj55yhZwkY9EQQCWT4eZhPwaGyhbURojdi",
  "key14": "5JcpeXDLqzVX9wYhbdJewgjUqE9VGseBkbg9tXAnRd8AMnMTcBJvCG9NoxsddExyYnwVDGta7XFRKeg6DNzsM5Zt",
  "key15": "42SKfank8fAeq84NbFm2FUuXLoHHU1jhAdYJj1sSbFnPnNZtEs1wpHZRRtRGXAjJsPuPYC4JNnTokcun5UNL6zfv",
  "key16": "3nosqrnuPVf7zfreH8XJFShVi7geNnfmUVYRcvXUWhntoFwDK2fYnhcEPjESN7r2Nv51mZcH7UHuaJ6dc4YxPjCq",
  "key17": "nNP7xMzpf7hSeMAv56WMBJEmxvbGT9fjQUQRcmBWAYKuXxFjRBkpGabR6RkN5LujRhdViMyNekzc19s5Kvxo2cb",
  "key18": "MMSrcj4QgkmzhUGdrLvinsfpTR2cJpSh4o6HiAesCaPvYswSEFV4DU8yuexWkWDw2WytasJAc1KVFaQSEovexYH",
  "key19": "5sCfBq9QRVp9R95LeimGSn3LhMXudYWyMTbZ6AtxQZpk5a6u6mcFxLk7RdYE3234Ztiygs3R1DCsEjTptdtHvaSz",
  "key20": "3weQJBvsaHhjZAbKSxFmDTiZTL3BVGt3DXrmXR9Ec7yRyYbkYbvep6kquofd2CDneUXF9Vn4HyfRkEhZdnSnRd9J",
  "key21": "2NJnPptZ3iiLjDSDc1b9kExyEGD5ejCFSNU1VRwbP8C9u1WamcL5z1RzvbCbbVD9eF1RVKwviEzZtKH9WLFMcj6X",
  "key22": "2oiPHbnv18gz6EZuki4GTtjnZgjFwBwRCN2cMi6mF6B6PguH9RSha3L6x96zHyD2WZPDioXjCy8919RZp7rDfi8o",
  "key23": "5T8GPvb5AZCJe9oG4JF7eRLximUrAZjzVGE6zcQAJ8gBQacWH1gVDZ4BT5Mi3dpZ9uyEoiHErcxDJcKqx9Av2Ctf",
  "key24": "4ABxE4tjLojjGSn1cGbFjsHgQbwY53HDzZXEF9hxfaKyS19jUrdViSon14TkoBtwZhrKdse21g8rd9iCceN8r9Vq",
  "key25": "5NVEZNDBnfjv3gg9CEkvdkhVbv4v9DviA2JsdEqnN4u7wuriQEH6gyRqhHGVy3GRtHyitSYwwRYxYZNPftDGj7Gg",
  "key26": "5fEbV3eJEkdw34oJh3WpNBiYZX2r3eWuWjfy4cz8SZFmDozNVdoo9PWWH8abYaGCqfwfvBJyJrEAfRnYEEGcm9VU",
  "key27": "2vD48QAwUnCEhycLPFfAWSsReJWjcVY9Vi6v4EGNbp8SqcLmHtNXMRMbMug9dm7nEZf6iJwPstNDmSDwmM13fp1c",
  "key28": "3KxrVW18DVf1aTmUSGdhREwXiXF7QACpbfspmLq8E3iUXbzkZgp2bztMFovYiZs1LLW9vfR5FmpZ5DQ3n1PgzZyn",
  "key29": "4HrgavTNEjyN4EHEb5uxRWPpnmGh7LEVuTLPf9cc34WeG55uAX8sNDD82uwvkzbXCdXRnezESiQzz9Z9FPtuq9s2",
  "key30": "2Kad1oqnZm937c64sNEsJkdfG7oUzZE3U3wALsdx8ipAXu9vKyYstWFerbfT6t58sR3q5TuZYufKQcCMu6Tr2vAk",
  "key31": "ZMozDoMCUfGVrXBgxr39M1in3tF5gpBYUyPSxaw6U4h4ipi6VCYE7BziWktKELdEEuUkK5YtqZckKgpck87ACMX",
  "key32": "4jkgoPaLFR2aDiRjM9Ft1FiV37VNgbARpQ8GAUmK2UEZCZA3KKY9pTxRgjwU85xBY8fvdxi9h7eqB6kVnMFKDemh",
  "key33": "36nCCvmPjyhRJYe38GJuxSuunyxQXnxHnUubjFZdoDnZtQsZERpn8dtTXtaUeWyK6kyK82PFtBMThcaPDJbYdP3m",
  "key34": "4pc4BrBq4wrJHmmt5a2h2oNTxTaUbcbv6SgzpWXEJ6TUgqJ53soAPRLRooHnU3UjerkFmKGES6BJcYDR1UXVsRLQ",
  "key35": "2w58EQCr71whVRG3DdBvKSEAiBVLKKPjx3DQYrUzPGb3U35qNpMED8SxU6LBAwEKU9PFYVC9VMxYWvJvwPKmaFge",
  "key36": "tX2Brh6TpvYLQuyZUhczVpckTguETM4HNHBY4es8gpFHKvuSa184UAy9waAW6txhigFzsGXezEG1na29ZGSjwNb",
  "key37": "4xHtGEkZdARFF3NPknQjkF3V2Xk67VxB18dGrHQbMQbAm6ig5LTRE8fHamaZqDhs98ExDbanqPMdJ35TmP3TViZR",
  "key38": "BDaZbzY2yQph58RUKaSPyDJmpa4hiC75mgMAWtg9Q85ZLEtZUvh8z2tqdFqx1Y55zTZg8czDc2nYTycpgAqe9wA",
  "key39": "BM798jo3wKuWyfm6LvpWVwvUnCLfHLbx2u2AZPqaRgvkDdKA3FU8pvsSqwwetNtM37aJmLaiUqtvtfSStAgPbWN",
  "key40": "5A1JQzuvaLmLJJjEYH5w5YizqgsgAjnvPmDg2KZSf5wGiKoFbwjrZ366SC8d9CanVfwb7tpTLLH2a7pAe1o51fs8",
  "key41": "2n2krd6DDcbs1oQSivuv8N2DjyDWqCY9EfGXRr5rqsq6GntQeEtDQED4eUMwM2PKjmBVRQooFMXBixrvxwvGErdA",
  "key42": "t4UYEnT9v1RHmeUevNfumkH2Zp6ms7wYR8w993cNEJ8eYQH55EL6kf7ARfFuh4HTx21ob4ejfaYWQ6ccUrctXhn"
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
