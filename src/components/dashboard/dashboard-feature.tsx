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
    "41Yjs6SKfLoCdgm7T4R2fEJm89SB9UwbUz9QUum9t1oLcSCgvEfBowGnedCzJz2aXBpW8eWrk4DXsprFCAbmwaDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UzR7ey1FcwYK2nzeHQo2onxkecnoeNBsT8VLFyayg7ih8LGhSGyLV4NixnLxUjw41sgMo1W9eNfXFLHvNxEvDq3",
  "key1": "zBYaAUgprY4nbJxMvWiWkd4V56eWPsYQSTtDkFiSbZog7ty1L7r4nyhGDMeds3qoQSwXnvKycH1H2VroJEBdFEJ",
  "key2": "2CJV1JVirm4JNPWZNGhfAvgoo2vd1HsxZXYNPfYu912eiJDHoYac8kgsY2H8Z3ZHkZmiE1A7tja2AycFnCECgQuZ",
  "key3": "2q5dK5SgrdNv6qQTBZWD86GdSQvu31mVQxXsWdohAhC9DY3VHidto1BPW8KDgu5uLDLbVuHpsRLfjAM4V2YSzBW6",
  "key4": "5UCNawFLcRYY4U2iUX2ucwrZ6dRhthewJuCvz5Ro9mHNWFtQS8uQuzwiN7Tq6qc8a8y1i23JnQ11TozUoRsLTJgi",
  "key5": "4hrxqmpAReebWU9wsecajcTtGYUjqnXartrNrJLZX3ACejdZvaGwma14A4E2pRQg8LvSRpuYWFoAz2JKhx1FrVTu",
  "key6": "3ExzZ8iXUDy1J6gejVNTqTkAJBkTnoScUza8fjqK2ojp7CweGFkTj3Ltfwj49CVr9KvgfNerGzVhyv6K5o7GYHoP",
  "key7": "25pkNmpx6C4riyupXhfT2de7zaU1LME9hLyCxx9oC8XG1utDbXjH1xFu4cdh7kD6DGoTJN3Cqzm8aEAMntdhfBV2",
  "key8": "4RaBHnNhLJyNXMtZkFkoTR2xZ8jmGakC2M481fpeHhmJxHmKXxufs6YPHpsMwfs4Wjs72kVrD2DGs7crcruxKFNk",
  "key9": "3KBBCGhbXxE6BJ3sCUQrEbYZE6RFiyMvZFevsY8WwdNb6thxmmATcX8RNcUKCDhvT3YQTbCBSapawuttae1tk5sw",
  "key10": "4FeV95Fs7fAHdoBGDrNwojgr9ScRipxksqdRGFXDEtFS7K33yPQV9wpTUVsfeSR1JkAjf557VLDtUJi44yjcyWAX",
  "key11": "27QgWvxUXFcsq91hPMAxhsG5dupV9v4yC1gZyBLHzDqtR3WeSnYcubf4SCSM9snmjs45v2ZPFSkUEzjrjvnRj38c",
  "key12": "4jRsYmhKdGQuYFTkfNVeeUN1NZBF3wL8tkf4JmidbzDdxcTQdnpK9AYY13kT2nEcXHQU9FcdFUzJfMoFJkkjpR3Y",
  "key13": "Kk8zx8ai6qWKAVwewGeQAkmMXKQndcyKxcaYqCg3ViwY6jRvN61K127L3Exn6sz9T453Vt5YQtbkwWvtHgkPkUf",
  "key14": "3A1Bm6Vu3cjPALLomwkNjY9xq9iDHCcdCxr2o2NghFMzaR7C4AB1YXHNPVk31UM4wafiN9Lm9B2BXYyTnBCPXZPw",
  "key15": "Mu9SEt55Tau6YoUNJb3tdxuNg8wwSFj7z4WJC3oYz83CtYyn5TK48zXiumPvbaxxp7gxyi9dKk25dCHXTtRTdPF",
  "key16": "2edfwQr71YRGEpj8jw6QgDBWrzSPpW87ohAReHfMH3U6rCnqANzo6MtFYwRd6TawoL5PT9XPyZtAfstYhKUCejrm",
  "key17": "3z3HcXcMptxUGWhwMDXXbcTcLLEbzqJqJwerhhSHqa6VX1LxTWoHDEB4sjSxGzAZS5HTDkSvkMQzTE1J6WtCDYBb",
  "key18": "NNEmgajTTocbfQtYZnh64ihWzxNPhPG2rebxMXgjkuvuFeBnESCob9JVhLBgDcPEfQMMEvjZEWwYAmgbmZkqiiG",
  "key19": "4GwgbhoTtK274kgXKuVRMTTdPc4CnNuapLoHciBYf9gLw49UGAZYK7jvFyPdfX3HDd76pogGJDQp4Nh31AqVuj3z",
  "key20": "3s69k2g94GVkq9b6onZSHTLFFdHnAHzfwfnE2q53TpcejtUMa26udwCZ7K9KMtB2mRKPK6PMCREjFsWuJ4ZYEMMG",
  "key21": "41x5YTLRo93rzBVtRJmRkiYubgsQ8xdU5qn1TCBycoRzc7cTyEApWNRZW9KrSFvzs9KgxXNn858maSBhxhsPBvep",
  "key22": "651R1yeW2bDNeS9ix1PkDV7KXfGL9m5dQR68pMTpD5DWG6RDBdiSbPq7YqoMdX18eV2tcCPxzDqzMFd5U9Kyvnq6",
  "key23": "641GD9a4JRqKFvV38Tg6yfb5SejZBeAamUKYKxngcMTQiaQagBpwBa69knjPuKcuZ7Mc3AmP5JzAaqn1pRhD4vu7",
  "key24": "2P9gK31WoYRDRp7wmmRPdg2XSnMeTW5sUZ6QaGXvnKEj1n6em2Qij61xbSdGwqWv2MBtLBgxcjdceb4BhhkAxjDR",
  "key25": "4Brbf2MpsdLdBY5XzRuKzakAzsfjEntB2iDqGNMeJrBr5q9wLdMLwNwfesiSG7X4wyTDnmD3HU1RLk9dZrinSEpu",
  "key26": "5zSBmSky4edL2JpPpZL2m6wMbZNV8eQYZHvLbv492dtKGAWXVrcRwracRWqyLukw6D9NCAciDydE4WjogLpcr3q",
  "key27": "5Z1BsMF4zrppJtTC9g19m8UjdEbgdm3yeRWvgmwhLshp65SRJSyRpkvRhASnSJyvGCVd5iuVeoeoZBryiQJ88N4X",
  "key28": "51JZT28jL44MvjB4tUuaTQk172uKUwmtGVZME4y4ggaBoQa4WWUgn3CaWUCRtUesxjYh8ecy3mLVrDehmSxSfLMe",
  "key29": "2aM3jG88Cjhns2ohDUgAFzr3xDfMp12C8UUKoPR5gnKYSpWEReJY8spc7nS8pKNhh38footz23pXYj3kSd1AKneJ",
  "key30": "sRMs6hH1GZaqWjNvc9vQDvFWtpcuwKJSdMVAgjjTgiNTZxXTfrPNt9W7ucZfzCCR7ERBXZcoFJZw9r2BtB4hqU8",
  "key31": "24siv5wCrBLWuESUVzfmkFjwrn5BaAyPQhUGCBsLwkeKLxmVesBLiBM9QFz826eWv5QDS5jn7x7BPFpAhMqsb5fn",
  "key32": "4d8rcu13jCS3J6YQt61A3tWraMFpjURkhuCzw4MQqTDu5JhA7XqHAtnrXx5V3KLVZBJ5GB1cTgrunAcUtfpWZzK8",
  "key33": "5N5Vgtsytnd2vGxADfhMGtSgcZusKuJNK3Pf9zKhd791ehmV48L8e7mdGqQ3i2o9EoapGC7Huzi8FrwFx2gaHL36",
  "key34": "319aB3wCkhSmg9EfoRSZDEK2bfhx1Xzh9jivWJFiveeYa8sXaaU2t37VL17PYpGjTbMQwsQd9sGG5oFn1U9R8oeu",
  "key35": "eVZXJAPUzud55wVViavaomduCwwLLdcC8k6AYWhjSR6D9Pj5sCDwAHr41QmgkYPC6kxr69Uoyur9okeEgJLQk54",
  "key36": "2yJW7XLw8gsfaQa5jN6bTZGxsPp7xsXTHjhe1Pw9zmEaM1CGFTMNupTg5VUbAV1nXeG3rFgpQCHSGsoFf1bHM8qK",
  "key37": "vXc8CpAa46DvaihHXN1cN7SftS71foeiBr6uxkQHm5PGm6T8VtzkCTUA5aX1eRCgGexJYmJwNP7vdtVSTc3BU8y",
  "key38": "23RCrJvT3QStjGC4p1Z54kU4PSEUiETtFG8Fco2ihqA9SmJpk7pJBrLEuYC6iyMs51Do6UW3si7vbEK1YhToBNvh",
  "key39": "3u4S4SFNaNkxpLJ1PgMuZN7yJxQtQuRPQCq5ogXioipQJx9n9ZobEyVUWdpXjR6z2nX16ev5h3bzEqEFhq95mrVn",
  "key40": "4P4SuJVRGrMjQGFj7fMWp9YYqR2WCMxnKEQmZaiyW9KHM3ohJQkCSMD4vVwquTB8XmYNZSsRYSM9Ljkdue5SVkaW",
  "key41": "4JL3xSyuNLCYCKHem8omxuUd4fuCPvjNpFqWc7KnTTNBMymJBwpJihbcPfu1csfanZoDrCRTXSJouDKf5LPc6N7X"
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
