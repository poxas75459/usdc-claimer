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
    "4YLrsKejUjLyF7UK3r1EDvxgqCP2oM7oSRAkmGDTu86MvX44MnMrbxSF6uCy6KdLdxUVCtPYQVZ99SZt42ypV492"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JyHzoyarNrymv3kmoaRWSqXP5HNGSe53cfgvbx8ePQprib4Vy8vUV9qjfsCdT7CG5fSDqQWHKCX6dWxCMcJfgKa",
  "key1": "4LVDUT22MeSwb3EMpDXYYHTfKHVUZVhCyRYsmmsrC5uSXzdjoGWRjYBp7TgdsdXMpNnF4UqVLziZyvEakEq8nXiz",
  "key2": "4DM4KtBrUKkP1jBLeHbvcgVNtQ7VzebJqnHypPjePsGNnKfdYprmPHdCZB5qsFM838fe2kfyLMBugqGxjc2Rzrha",
  "key3": "2XTpmE6NCH5pj9yEhkkLPyHWvUiZ1LDqDpusPr8PNhJmUEhUjYu7CkCPXb9kK9vdyKKgAuLhPVBUoSCkGEsHcjKb",
  "key4": "2v89By9gCBjUxHEPG4QJvNbGzxDTj6vbmJUxT6PvmcfmstzjxiguwMULYkjPgmuuNmE7oUj3Wg68kYqXuqrAaZR2",
  "key5": "xiunAajqXosy2usGD6t9QoJEsQKobVY98yqep89boggcsk21MStpKe3SBdrimuDt3CDzmHejnGy8rB7WzTAbpTs",
  "key6": "dWQc2RR6nMwYa3TA2Md7YTmRc8NjznPcTmb1Gw7CQh9oEpiFhbPjdCBcP6kyVHWC188sSNhBZXyi3cPK1FVpdsj",
  "key7": "5YkybxPBZwUGV3zEchvr7td4SW7dJeVRFTGnxpqADeJ8Bk7mDrHHACY6HmGCgPCdKx9HLhrjqkphAbDBR28qcnTE",
  "key8": "4ig8ezHTyKKtYEhDmjPazSfya7rnHZZwYDSRVhgZuhwpnDSKv1BZ3egD71vub5PWhvUzhyRLNdLFXoB3CSYktvJZ",
  "key9": "2ViCg9kHijgW3TPuHisF6QxSQTynGb4VxvJBmTjdbUdBZyhFQpsb3cS2Qd4wXmEH2dKV78WoRkiMprCmFRy7cC6Z",
  "key10": "4K9UP3CtJbWQaoFk41fLGADRVaFamWXXSwyTY16u7WNnstpQ6a1fLypBgjmjezWrSVkzbJXdp7wVujM5JfbU7tdL",
  "key11": "q2sc22MzXRvgmsd2c48jWd1TnSG1hs44u2cR8eoB9dmfVDMRfgGZEN2w7hESEByTXUjWR121ffbH8q1aqcoXXmR",
  "key12": "3JnpzjoJbr33Jicdoqkw885WKRC3xGHPzhis6Q1hQKE3tbgd9GDsbAtLaYtsAbgciukQcvPdFNAFc4qzygR4kEmq",
  "key13": "57zfpiZ4UW1Ywh4Zv5suzo34VcdHvzzArUodRb1ZFFw7o1ER8jtKfr2eHUdoEdxsyAu9SkWZWBiSG47gveWS6d1u",
  "key14": "4bCx74hPBa9WEjjGcem6siLjiVzJpwdVgWr4Lfxx5bdDit3JoL64QsDtpUJGSL1vrGZm3fHowxLooRHzoD3o4bej",
  "key15": "3gQyWKmU7Q2cN4dR3yn1trc3ncGnfYN8xDKfpZGZhn4wdm5dkohHXaDGz9SeeXS8CDbn1Mom3GuAnqLK8AiRRmKp",
  "key16": "4VTk7RGgjqP6SaYGSXA4nqMhvUaP1qis5cdcHkAjvmBfk1Tj3mYaKFRnYV266xZP3Cw9Jrk8zBAToytGuccPPfmg",
  "key17": "5FqJ5rBsb8qGDVG12VuAfgKFc4Kdv8CQNct6cjjQbBUSfY7EZ1DoGcvCJujKVsBxWTYstPnYq2sXfj7k91gULTvS",
  "key18": "2XZdgbPQAvXLCkLUPNtq9khxNL1GHMPpv9bBke2CqFATzLqynp3aRL2hDMpQDL7oUGSh3f2iC4bbL8CL1otJrUGj",
  "key19": "yqcCJUkqYQsdLpK6grDVDNde9shm2vgxygweAX4rpzQouZHfW8QrHGiZXzYTEnho4S6gDrVDKRLabntEfUSyoZm",
  "key20": "4MTnp7U3WR4ZgVc7U7rik7cq2bixsFdZc5fS94N5LDHmdTTQ1An4GgdiKyiS7zuMsBxiBNnC1StwmjhjmnPqc843",
  "key21": "D8RKuKBDpsFoQY2CVZj84adGuFFhfuy2aJyLoQfsJm16WVYpLNB6GjU7iyjx7PS9mrxzuGLPuT8kJYWtX2yVLaH",
  "key22": "3YcbZoMWUWNu6HW3eBsvQa6yNxMEekC2scLhLgr7vRfXShN9RNz6AfYwNQrMWCXrdsJ8cYc8E5zAmqGaCfsDaQx",
  "key23": "2YSyZz1L9XS2k4LbhS2C1q2Av5YMLw39QxVL7tUfZPEtbZAx8Zm1gdR58cD1nhNfeE3wCYqwPnG2UCxJEa2ossdv",
  "key24": "37VzbWscrPBk1QWtUTduP4bH3pHLtMPF36nPU86zgDmwipVcvWiV2yTASFC1k5Xz5MdWMTSHmq8UYUb4cWK4989i",
  "key25": "ConRZ1vqCskzaZwUTBV2oXj3S9uskrFRKCPiqZF8CaBBJyWcp2MaVKPyDtsK5HLCi4fFdMKb3ZrU7m5qmJPvNbR",
  "key26": "5bYmBqkiFL6QcXzrkjbqZNtRUzauDfvmV2Ww4wV3ZzN2L7GnTCBmuHKDedob1j3LskCBEN57KJosH4aTsi7DJsoG",
  "key27": "Vm7LCyTY2Cnh4XYu6HdzUeZFexya9WSXRxxMQTnhA3PeW86crsFQqAGMB78sGBRcPNKz3daEWFqdquqMHQRFK9t",
  "key28": "37GJn7xASbQNxhcNoaohNiK7wHEzRftxuhKZLQ3qUVbAFe4Qqph5WuH5S4K5rsr9e36JHqszkgAXL1UoGTbjj5gp",
  "key29": "25mckJETnUVpHoeKo7x7fNAbXDosjnge2wQJosLtdWs5yjQsefLjxWduQJZxmPwQGYHLdqCvtRUTx68wXq8n8LsR",
  "key30": "ZDgjkHFfkUpMqiwSpZ2JpwhkeE1S8b75T1Tef6LzMpBSQXmpKb4Ko55hR4VSw1rhTYxPzCCT1FwZBaNNNXcGMhV",
  "key31": "5uzgjxhr7Gm4tSY9NMzFY7HyfNUvY3XFqmw4Hxbj62uNvD6boBkhnGMGgDLkQC2RvbaaiMtuvGqMYGFCB353MjLW"
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
