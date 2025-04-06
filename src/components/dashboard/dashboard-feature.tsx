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
    "5RtqF3VZh5YjrxzJvmEhJHoB3Mc46vVnVyqoeQngJw52VkZHAkP5jyR7pQdvTjYxyMW1z1ttQasF298bextYEnxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KdqbAjqNVXJ5Vq4hSPXvhCatFdCobRBcbM2rK3XnYkSjaVaF1j5mogioiCwSA7fz1KZU1hCJUHU6W9Z8XTjrbF5",
  "key1": "53zuJK2zXn1j2SERoYhN6noHFMeo6LyU6bhpvMELV22nPr9AwFwLZBPFG74LBUrM7SFDSRJL6VDvSpo6VKxDzXHL",
  "key2": "3zoktGqbAtUjzRom6k6cv8vWAVfrUknJ3dQrLQVZUwfRZbboF62xEhm6T48a3RsspTyaTErfKjHxKcYJAuzUQVSw",
  "key3": "355FYmhNXyQ7hCdhWFDJJsw2nXnibbUynsmM1ykLaXbyzFmj82NwURg7g9X5PNHFDmBb2k3P73r1ANNxCxUURigs",
  "key4": "4VhS5zbYVX4wsbpioMRtwpAwgqRjLZF9osX1ET4ttokNuX1b7ojMWTjYMUvLzT6TMpL84cknv8wGkNBk8rDZWMvZ",
  "key5": "3CGb6wXQjEQWbuVYUuMBHGkbGSeQuuYXT1XUANnnNb3biE4EBprXRmqgrJkBWFtbaaatw1gn7xjBQa18EqfJJExZ",
  "key6": "67ChcF9ZzE5etYtax59CSD1ApbQEGwZqUn4byeMo7rjT634RmAGTGmna8jWtHhMdeadR1iSP2H5VGQQNnyHDtG2v",
  "key7": "2w3s5gar5brj1Qj4AJvPxpH6ToqrGadDTCypZk7nkepMc2zRWPFCmG7Gd7v3tEqRQ9Sb2YF18sy4Y5PoqYPPMYZT",
  "key8": "4KUPk8FNmbiuDae3CXNueN6antCTngToUFyQw9crif9QPeyYytKRS41wCjfF2gkNqw8sDH1kJYjxZb9WzUNVi7WM",
  "key9": "34UBSV7NjbArQWWQSLtEe8jbMqXG9LXHDh8idYhfQthe3LcdYB69RUt8Ecn5Uhf7RhnBR87jAhtAWrfULw6Pex7U",
  "key10": "32P1BqB7VwYBx3NT3FanNp9TrSBpoAgP6kizTai8qgH8G1cWDrzkG92aiiQuS5ajoFVPzzDafQ9RtNcPknPSER1u",
  "key11": "2onmtFbfkxzbtcNqyys7JxWTXmb4RruUXHvwRF61C9uVgdb3FoFVzXieGidbobUBYKL2VK9XS9LG9shVRLDT5ij6",
  "key12": "1oHZ8bffpQ2QPPJmRUVCyHjepwG43cvvt5SP5UFB52ENZsN2MY6vemWRcvgLYqmczyNEsBtDfrKt2NWusRxmDfY",
  "key13": "3E9UA21gn4xSmhiJP1YfnFU9upStxANhEAKywS1CmNnZvFrXNStVb1TiRLxfUzKqe5PVWx9ogRUpY9TcRqvLLAma",
  "key14": "JCyRxAnA23UaqrroufnHz7s2mNS94fQLt7tyLNUy9zDtK5r6b6UZ5Bk4etZpXxYkVMc2Nie6QTaoqT5we9LmJbv",
  "key15": "Syts8ATPHQ4LUW59UTJ8rN1E3QSweU3VE2m24pKtPHmEVuPxVq3wYGMGHQ7jzF2Fchyw7jEv354hUZfX6KKNWwS",
  "key16": "5xJ1RqqYab783XKxf3ML4b23USmEb7YPoJn35BH3YAEMoQfhi8gJEQwQeBxys6ZAcRbXZoRDqxax4U3ShP6JNSLn",
  "key17": "4VREkrsoJwgo6nr82q2PVmVLPTTLND7eHqVVjbNHMmUXAp26LYBNawPBmQcRfM8DRLf2axS2DN3sJyxpLEPNSYmA",
  "key18": "5BZPXR1ej4YHWE59NVoz6RScW6cGwicf4LSw4jhe8ikXHEZcyDwwtp2vYPgFQyupkNrDUCKNdUBerpBEX2d63BCw",
  "key19": "4xcuAdqYwLNw1xTFU7EcfYbTKEKRiAcRLxFDML2EPEsGwYBZod5JX747X1gNwWorM4LhPxchE1pZC1ZwtcxkVX6E",
  "key20": "5scuK6j4xmLbrpdMa7qY3DcTAYanvp73Swtoy1BpHFvjGZ5SnJNoDzHoktAMMec3Nkvtjj9SEezTW651Z87vraju",
  "key21": "CA78TcWC6bAvvRiyLzBEPnsnWGCtxtgRViRDW2PeRACbsfz8qBDJ1ge5QMmDWssCp2tJr7JNpAs8QzkCNDpJCMx",
  "key22": "4HAo7MKCmKK7Z3GTke8LgBxnGnkx1jGsUcWn75f4qmYi9Y8ZTiepveadUCmQQu91PhUj1sxRuzMgMFgSteCNbpHj",
  "key23": "2SQTkBk2egZV1R1yac336VwJ9nazdX7LYa8Tac6oSA8FVtAAL2Gu8ENxybi2mRD8YRC6du8wFjb6ZWrWugMRxZXj",
  "key24": "4cTmZdo3feqsQLQqC7TcmcFiPvf3nXgCX5MCRX9dB7pijJWUbBjWRXGLB7kZHwb5AUHYWHcsmcmmVjhxAH2FZvvd",
  "key25": "tSkfVFTubDwKwLrSM5Ad7moZD4gKWP6AEmBvwFbummZZPGLNXMVVSAihHbxtRUTBz3oH1huQPUdUa1ZAm7LXA6q",
  "key26": "2AGyjFH86hawZT6VZ2sDpommqPH8cXn5KPqYfATX17YpVaqAsZBbTeWyfEspB8qC7utitSG5rUMGUYuZWPUL1FJe",
  "key27": "S2x4PWZyDocea3EphPyUnk2i7jNjW4PixXGHyHEkipGda9PdcfHsGcaFRCpRhUrTRvMxVjpZrU8ttHAHHLDxfZv",
  "key28": "5fMc3YoeCF8p5EoyjFzYSHYcPVWhY6FBbUVW3URUE49JdqJ271HnxDBDxCZeNiuWqM4fMWnnyFFN23j4GN6H1zmZ",
  "key29": "my1ChF3QyNb1KHUYeBYrHcezzbpbCrEiv9aBf2sPZ1wsJA7nvAvrRdo7JeNfg7fxVRM3ahAMi4rAnPM15SYhvWi",
  "key30": "y8Co8LSrGnM6NQrDL9kbb3Hzt1HMTxnTmNYnfyASAV4rCQmkA7ygeEjMf7ZgG8FRXjViTY7Q8PndRbXKL1LMScp",
  "key31": "mKpNnXsegeGw5jZRkJPris9udZm4gyw2QSiUdqULKBdPwH6ot3oZDBffFP1MzqoQHswViX5XMMY3eQwFUDxf6vb",
  "key32": "2ewBTQzGXWeaGMA2F43X6vg5A2xezdTVoiajjU3kTgQk4JSypjimqGoGeZkQunSiTmK4BECofbb6WLfoUmH4iFud",
  "key33": "4PcczTHifEXAmMYwLVUYj9vR2J7szxr7xdZACZoEshyBjzdVDyUQ33KSp5RTnc11PXWFeXFezjywPFUVgSqVcWFh",
  "key34": "365BZDXyAEZFZDuHwU9ojY3NpP3YUkuNZUtpnRe2T5aRXz677aaEpYsiiCHsc3q9r5Qs1yGkL6PXHGX3c81G4Mvt",
  "key35": "35twN2DtPpDxMp6s7e98gNPe1FsxCv9PfSC5d789NAA97AcDtUhmtzcC1sFthGEaXjthr1z6VaZzH8RqF1HLfKym",
  "key36": "5wUJrUJattL4tC6yx79MeMbqBiy4c3UquVg8L1D4bNs4RpxWCH7P1vzpyszgZJAuVvxhbWASPRk53LxQjbMMiDZQ",
  "key37": "2M8F73roLnpuYeRacEEj6W3yc6WEX3DEcQQGbzen3fDSnsNK1US87E8iMkYY5L3Y9qSMNoF9Zsnz88U6oCmVK5HY",
  "key38": "pxLAVHp8PVByZ4xSgsV6kuQBkSUmpeYWzyZX2zYM9dBepwqbZn8DaXid7iUyRjTGWfDG767Cbx8JXs3WpKH1TCb",
  "key39": "5HYQGRpT8Htad2MqMru6uggvLnkEMHqRCRZHxhABt5U1G3GWVMxe5V4WhKfMkDughi45V8M1Bx3rg6RrfEzd95ht",
  "key40": "2eigjNXE1twXoiPsSCymupYDuPCv7J4T2eUiaG8heUWEKZNBNE6ajKp1RTG9MzEjAz45KqjUQ7qqUxjnL4uNgw4L",
  "key41": "5ZgNoG4HFTjZ68AU17RRNS1HRGmM6uDLU3G11LteRfZ9NaRJXqUCL7aBeUrwqnQnPuHqVYUEtf5dUKtBYyjahffD",
  "key42": "hThBEP6eKLMQv8kqm4jPhYYWhjzi3VNcg5VHezTqcBRvxeSqgCVL8x3XrSRwbh35knMJeN9wXadQpAeSWs7aTzZ",
  "key43": "xtMB68tpCw88vo8MzaoavGL1n485XsJWFHTTso4YcL3snAmS8sHuxATMFGBTvzRgzNKngxTVr7hajXciydxP8Dh",
  "key44": "aswWhFEn3VnH339uLhc6gYGVzo7poA87ykMC4HCrFHA2RyKw5K8qRgPgLFA1CDZErqS3WcAmfddNnbbdeii1b42",
  "key45": "tuZ4kwxJPqGrVJigCnHJKjFvDdLaxM2WucsqxBiVx3dsGNfRfF4qLt3HZCJvJSDAUQsPVw73YChbFm3W6NgZ6RU",
  "key46": "5ZgMYfyoNAKF4bYmFhA7QNeBa1R1vUVPTrM1ZTC9p4iugMnM41aWUtAsChBo1C47YwCNtXvBvmr5Yz3akjKRvQui",
  "key47": "3oLWgYhVimWbMzd9Afgvem1Sa1b9QX24fRiJHUKHU1AeZ43aLNf2Mb1XQMNrano1e6FfkTkkQjMuJf2XzDDhALHn"
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
