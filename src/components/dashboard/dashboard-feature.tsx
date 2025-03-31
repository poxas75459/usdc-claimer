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
    "2XVypBKKd16DjVnbzXLT6kWLYDf2chUzkQFgC83jxwtfH6Y4PJbFw4CcntjdiNYZpdUR2EEGVym4hXpYQY6H73qW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JyU21XkGwmxdjo6XKCuwP4AgyqieZg4tcRv9aDWSsFG5EEsAYJiG5i8Q9VCemaimHnWoB9LMTmDX4vWwoVYvqKw",
  "key1": "235XpVqQgcHUiUTL9u6nsTiHn7Xsx4FHXw4n5xx93kYSe9ZfLrW3qc4BgmWiBU1tHZXUpjLG63zxBkMDyMomaJvx",
  "key2": "5xz3AADaFkfBWLBysFzTVuh1m9dHt8LUps9tq3XDtUKMhHri3p5Ho2sZcZXYR75qZqRPNEri5Tkxo8EudoKRAuWB",
  "key3": "2oJN3bRiTq8NLjTa8sZUZ5w74hYzKKtmD9P9kPhYVvh88UzDMWoQ7gRWEbWC9ATRsEZjyLpKqm3uCSccoLKfQYPJ",
  "key4": "4YbvNDMRjXdzyewkVzVM6fAcoqnPBpfv8tFv2e7gqtg9j18KvhfxtLwtWCKjeRBhXy4ey7Q27Lge9hXWPZDH5tqN",
  "key5": "44NeDSopGvThkrPbqdUMWkz6wio7j6XmmJJS9h5d8vB8rCD84yyj946BRoRc7RzQW59hWS1CsebpDwPjzUJujNFK",
  "key6": "uunf6VZaipsrZChAbr86JRMdWuY2vdY94K715WRpZYWPV5cL99NHwpXeWrwMbF7M9dpAjJynLHtCx6J7sSxMGyF",
  "key7": "4Ci5HLnCySRFznPZYX6ejRu6EpGaZ3vdFMhwu96VMNkWTefi7hG34FQN1pa7KKY3F1gbGhJmw2znW2ppFSm6bNTS",
  "key8": "2qsfD9u6Xi2Lp6KF1PFEnenbzkFkVLJmuLjv8Q9g5TdfZVcAS9NhnmDSELaJCpbye3rWH6jf3Q6aKaHfYcu4tn6w",
  "key9": "2vnf9T2By7mwq7JQYstUNGpr5AUptZeCggq3ENXBrcpBHmiGFD73Grn6iaxkbYkYMpvDxndLjaXXjtd9ZkSsK5kV",
  "key10": "5NDFEtxDE7vyssivRP23n5nrLCjBLGCbxLVuPv3fBCeFsfEwLZ79WwCGZ79YXQpQSqgMhYgkH5R39CEDn2k7Zgrr",
  "key11": "2k7cvBCYsvvUthmDcGUwyd12Ga3TV1NSSx9T3YmZiz4HDURzvreZSnZifRvUVX4DfSmr3ZzLNADMqjcT6UJZ2Ezi",
  "key12": "4W1LjRYuU7WQbzxvuyNtUAfCNH5rDbhaJBE5whREturjb3WsYX7HpWzdXdyTAHHe7Npd2dMSNiKTY4wVJmikmecG",
  "key13": "4Q8iUUBT4XwAsPUnfhQEWYUhL13zuxZGbe283SisZZDxBd5yHJ3Cx4i3Kr44SLJNXBBqRLFUm5cPvmxs7Ph1JhTK",
  "key14": "FGUfbkr6vC4YYL3FNS2bSniTon6jafHCyxHYBLs7hQQgCmpiqWoftoKUEh1aQQU2hEKEhfX3uH4rUahwBhyJ4B3",
  "key15": "5i6YzhdLfxpwbHcgrC2U5NYZWUtXPufgcPxuxNa79aFjpgZ5E4QCMdEV2MTXoyg5ip3TVd4dxfcBP7b4BfcEhEiF",
  "key16": "3FTFJDqKHiU6spdy3MGAdb5sX1rp4Vu1RdAnJf3AwmYSGXtwyudtNfJ4oATdmL1fUWR5zuZJnPu6gRzgmkwjzaRg",
  "key17": "2cY2p5WQsJAGuB6Gu27svRSQmg1E3PCWsM4d8LGHWrabUc3Nay53oVoJYCdP5qPZyW9DwrXbGyhzdiR1YtyExKat",
  "key18": "5FZM3s2zn9zo2Ao6HaZMyhyTAE28mduanE139WhFyDKpRqPgBoY7K8z4r6GogFfuaLNDpw6T8snwAbsqkAKYQqJk",
  "key19": "24NF39atMsLVjbkvczhp16sLGp2s2V9CHEgVoZHiQgU84Z55fGUhqiSXd6UNesPjSzY8FUg4yzdSyAB9nJLe6BhX",
  "key20": "2v9A4ggFBsuiXXRpq6CGeg5vbn62v8UZtotoGk3BwBSGjVhtoppLGMZssYTxi6xmA7JxCjxejnwEvu3UdE3sx6iR",
  "key21": "5R2hGrS7kowV5xKgLsc1MgFL7JPoNki97LXAnf79djKJDzQszVDSFK4ptctaq23RFd5gXPPVsNrR8EdXpQuHDEFg",
  "key22": "4qVnSHN8cv2MuhLf2d3ki4ttAzsVwbdrh2AeXdotsDdSfsZXaXqtPRNMQDcHAzYpoWMih7kypgKn5yuL1oKtMvXx",
  "key23": "2eE3wFjMSMzLPpAkAtwBDQmiVu2CtzGwXLEMY5nnm2MihUrLt927wdukwXTcqGtffceD9HCytDLiNideRTX2wgtE",
  "key24": "6573ZZdCduK4zTKvZ54RNKLGnEfuJqpzce6yFnJvMRgV1QgCxgLKA5LNphZXjpkFXJzgpPNXhzdRi8cLhP9xuXvh",
  "key25": "5v3iN2k4U9um38g7D5dwBKFi2iz9dw4rJhFQEgouwnw6518KjkEGktmqQq6j7XQdLmeVWr7qK9noA9HhHENuWjQz",
  "key26": "5EoKNzriTDQ9dbC9pqnFkcg56YZWkNP1zbeocmaqw3QPRfkLEvPTdeF1SPkRxwPuRb4PHuvfC5d49D51vVuLcUAZ",
  "key27": "34jPecYbEow2GKcRSLrRnqqPbaqokH3hbHiBt41kLMSxWWRg4jbd33hBmw5eMhUHz9auruLuXtQuc2FDafotyPw5",
  "key28": "35ZdH1yARReX4wbdydK1R2HJT1vrr2px54iQaaWQuYMgdAeVHWptQNuukAcU2ADF7hyTDTPnPESUtxmF3T2x5kWy",
  "key29": "DrxJCSVoqj6qHtREPhKMZxTzvva977Zv2j8qy9dcnC9M2fdRTDXfx9tVbQ27ygykXoawC5596JWqGSuh4FN46cR",
  "key30": "ZoWJZknuK3fRnVhzC7ZM7b5gJvdueJVG7xpwBmRscAiY64uLcZUQgCsafKxaCcXgVHZBYQCMXePAJne18uUCjMB",
  "key31": "4NMkCAp3x71UK4Z84PJZnceKs18EVndAHCPMzHve6HCe17qvhw2axBk8QvbS8YDXNMtoRjkQsfS6zNqQrJNDRMM8",
  "key32": "4RsvytV5hmpifZv5GLoJVVeekJtrrorF8NmQsDGgDhWHs9G5sVjYc3bb7tLWhyen2KyPskHPipkwpJpX8EhA44Ug",
  "key33": "MW6ZkU1kiNTFqWGQ9akwYN3pf9KksKoiXLqdDLoZxsW2PxTne68mwuikXCB7KkDqtQ5GDGhj1BCK4t93uswf1bk",
  "key34": "5Fiw991iPgLxWppaBz7RKH4z1hzwXAgHTRCBger2B2D6tJgxFZU15u3PPUV6QiaHmgMNRsQb2emyoLMaVXsYKHBi",
  "key35": "2KXNzcRgCv3CSthZVQp9LTCL9sBMtHN4ZwYUaM4s4HQvsQfgS7JcUCnFZv8unHVKYgFJrEdety2z43SBnGSBwPbz",
  "key36": "4RNCpqCYz85saEWSj5oEEx3vqp4KdWSiBN2f2Wf3uqABdqKUKu5wSbfSX9AmwwQ8D3kojs8hH8Hbm3pLLUYzawe6",
  "key37": "5w6wqW9HtGdmDfP8n1atoVqdJJnxx6681HxhtJ2WGCVVELy6nosWc8dgzchKxZGeCfgtt4S7kQbjdETx1AUiCuVE",
  "key38": "49HH6WhdW4Atrd7eLhu8h7Wr1TRXoATcxETh3uwfRredD3FnvsjkV277FGb5QqBgowMj2BPpKs5yMLUGw9a2gS4C",
  "key39": "eAPv1fmysfttkCdFxENM4GqzdvFFHD7jS8ssNjpZQniDBMvrXRKdKuQBQgdnY94xx2qBwu6eZNK4nwqcFs1QW5R",
  "key40": "4Vat37betnbiSTmp4tsKNgPXamP8QC1fx5HafChPkxYHoVBLYT3uu8mquJ3FjLz92TxAaqVfDpb14G4WFTvQe6qT",
  "key41": "5NQXH5xBBKaGXxuiHTvUvaBWydPtoFXdpNygKhBv1tPBjYjQmdCos4exazQFZ3w6RaMZwKxBMQZYEu8doT3PmyNF",
  "key42": "2z4iyeucBuAcBw1DdENCxRUShMDWY1JMrswdVty4ovzRFHjfc6MxtNZUb99aPR5FN4sUbYpCyJ9Z6bzUqjDwETVW",
  "key43": "4x7FKzemYR2SaN8yjEt1jGgSF79nphqevngUfu5FaQqoF5HTsgGgDr1aUnjgvYnjW3Ri1SwX3Q9gNe9a2XbyohFq",
  "key44": "26HGs7i9ndnwZ483kbMtk3TYZuBD76L7GDsYaj3hmpHjUNhiBjnZrHRtE6rvcL8xiNncsFcZ95dVtES2p1Br2SVe",
  "key45": "CyjFCjW5rZkvbn7fTLMxMfLqRLGJ7DY79MDAxZ25G7RS5umDmJFhjRwXQW5z5BR3EVWwrFhFe3hggMrf6EhPi54",
  "key46": "3pTcWgWA6XMN1EFJ7tZfF6C8wFLdtikYBWMUeZkcQJow92AFeQUnYxSFRfKsFK6QPKvUTRwBqKTTYTRsCCBViTSL",
  "key47": "QMvm3ALDgtrTTJEuH2Qpctb5VcXAhxRnX7gBmTfhBRCxqhjkhGUJ8RAQVfQ7uB47CTKWzN2DeLU6VL6yTjpcWjh"
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
