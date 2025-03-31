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
    "GDXRqPxVQoTLETgbjRThqgkJKi7J5hYqBKyMc7HesuiW16fjn6HNSkFEYrqApUFRZ7iTkvscTd75GKQWwuFh4CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZTDg4PucXJw2waTADvUvuz8ZzkywbTbeec18ctfMm3ZvcghAPenV9nJkEpABinQne9MRy2qhza1UUp3zCvSR7wi",
  "key1": "2fgzYo4not2Hgb6jNpHzxnidswoHHkrq2hobZnSDsPc29Gt5QSWq5HKFKWSTAX2WJZ9eVaRMqnW48QsxeqBaPHCt",
  "key2": "5Bpxj8HCiPWoxzdTvGwbGMx4ztypR2TsVA1R8yBPEcatM1KCBnqgwvz3KbUAbSQLR5WqfJoD4cntBA71jzPkGW3e",
  "key3": "5VmL8FTkAHRm8okuZKwKJ3JnqyuJDQZ1xTecLKeRLy2JLgTpCLznRNvACSynMyzggtH8zSkchW7z19kxySQNGec7",
  "key4": "5mW6QEYqgW4aQQ3p3UR2JQR4tDk3YNpnbswEuszY9Hh6To1HGQVkDx26ozuk65Bj36JpWMCvECCoChjN1eF6gkuo",
  "key5": "568iZGehCXtJ5RoMQUnqviUgAdxCjY59NyJnCA1EW1Uhqjq6zjfdpLzkMEsAZNUD6skdf5ePvptvwytujLdfVcHu",
  "key6": "5X64Zt67wme9nj9Qx9Xsm4d2HA3f4W9GMM6zuw8ysKgraRcUBTHHzLRm5wiDTmKtXw3sevJJWBLFGQ2dMJ1xuH24",
  "key7": "4iy5WoE8dVW8Q6Emva79ZFiGD6SaQyhadkJ7BUvMeLFeAA3aXwLDGWTRF6tKeYCNVzvavL7d6MMXLHqzB2jtWdT8",
  "key8": "RgfUVPgbfH1vJZKZ7iMD2kJz4X7d7x1edrdDUnq7ziPLG6LPeYMCT4qKfjFrQdpSPF7inALSgwc4QYqKp7UV6n2",
  "key9": "41YdMYVvnDvpzxPKZoo9hmAC8X5m7TPkCf2hoGULYuq5QwzBCCwFUpCVd8G2zvVagyEv9gn5jGqzVbq5Gu8HCeC1",
  "key10": "3vhyHoFrcL49dg8Rr9GWXdbhuw66UK6juNFvWM1Ug1UKLwDpxiEDsEdo23LwEb1ZbCuVzrf3nDZWcdLfJCV9zjSC",
  "key11": "Rvx2nLPyA815WorQ8qE6UdBa9dZoKNBSepHtw4ooMMMuwf1ekQGeH2m42yYo9acUeLoyRw4Nm6g1PHMMgRtc2SB",
  "key12": "754wEWhQAKkUhMpd8WCUUqkh3vzLTnicTpjhuCFgwJ4EstJVhP5XEZGqyez9eKxPuwyT5quKs5XEDiGJs8sGLQe",
  "key13": "3sSagsv4Rgq9mNCapaR9wZz7TVHLbkotqN4kmVCEPNdeGA1jW3tuwhdw5PJL53qRbAZDmE9AhHz8vFTGsRtQf7W5",
  "key14": "5k2d71hECiYvanm2x6W89xBAnKWRkRbeWoErueT1sqNUGuEp354HuKaRzNo9b4Pm88JB31ctfv4yRgF3MiEX9rmJ",
  "key15": "ogVb8hfaAFg9vZKmTx5cNF3pgTHqdR9uTtG9q5NP1Vhxky8Gb8KRSGinpUZgLCYk9j2zX5heTG2QYJ2HvsrNbhe",
  "key16": "ePvvfshUh25xo3r7VKVsSbstFq2LAxyuPBnqxxvXg1pFdBFrrafhciHMfaK9vUbWHMpn5xtdvRqw7JVaGRMxk2E",
  "key17": "3reDhwWyJVLLfqe3bSKGS2Apm686ntg82gSMHrX8UFKSusLxYsnLkHZXn3N2WZPi7kAgtCt7QEzqYYacqjYvZpYf",
  "key18": "2ucfhWwWLVRE7posvepovTF7p4o3SB6tyTqfJP6yWgvVzyasLb3v5xVcSdcB8GQj5BKKdEyQCg63B3q2LvYV8TbC",
  "key19": "2HiED6p2ooEopKJJweei9ZFgGxm5bcSae1aSDvLe5wye8Kf6EjmbBSL52bDb6AtjkHTXaRfCnmZFPPtMZen6KVVZ",
  "key20": "T3WFY8BLzA3XGbnwNw1CaDMhdLv9tqEHkjkb9R2P4V5HpvFDH3Fe7N498ReJQ8ph5TZ69Ep1DPLs5EV5MjxTwJL",
  "key21": "3MWstYt9Jq3QB3Gnx2oYgPxYCiv7FZzxHDZdCDt6bJ4YvnLEn1zaYrjupLVjsgoefEeHd5s4edeMiTUx8an4LoPU",
  "key22": "2zBwaGKuwXfpG1XgEXHAQvW1XKSnmRGZhvSbf3JGb824srMHYq6toKXfPQLbbNScCx1g3ncXXoEF4cMVcQQsTRps",
  "key23": "3aMXiyiFow9z61yvmfsjB3L7iZg9e44nor5Ansfac3VaAGGXoVS34GLi1Y1uArRSMZFWBQiXzC4dLb6tnTBGFQvg",
  "key24": "2X6wMh5GUiqisWmMVLoMX5etQCB4ZfGGmxZVL8D3TKszUEtNDu6kjjobAzkuzwDoefRon99WNixR7YyGaSRrkn4W",
  "key25": "3dwHqXBcWHQh3DvJxQC6uRQyFR9U58t9PHSY85KyUxuQYaXtMty8rYHnn8yWhWrrvLe3v6NwfPP6a83aMVKfpH6H",
  "key26": "3QovHGn6vhZkzv36js9DHDfZYSE8iukhi1RmFNAhmFWkdjmymeDdwn1RGRkFSAeTpm9GDbPcXhrnEvyouczBvyjn",
  "key27": "3rANyTqjMVmrqUe94Dwtr9UNvGWEsVqm2WX2jP2cTTgSNxyS9ZXpgiZjUve9u5vuQUS9psQTjaLA58Q9BrvHH81Q",
  "key28": "HiUFEtAsFs88MSfdE4dXTCKywt4FmeApLu6Xwg5spNbXHxrXm3Don92WJxHJA6XiQGLrr1177DvuPraDty8EN8m",
  "key29": "47jGBAXNZhLXc8fcQkzFaGPPVyMzSmte4ey97UnEwjW9rVpC8iBmLF7nDBySpFApvj23iAfrnbc2tPHEyFfmLDNb",
  "key30": "31MnoM6Gyz5urEBeXHz9WvNr3fYuzJXpKC8bcRYQ3mt9oqKuD97yTrRay4y2BUmM2zhQz5kZF3e7S4APywzB8Dtq",
  "key31": "5U1okK5TAmrtf6Z2Kvgtuf99GiawYEo4Di9Jaq89pVWrzTAGefPqNDEdkbUmk5fJkoy6XdpRC8WLQZKu45oFmvxn",
  "key32": "5Dz6ZTo7H9VxJt4zeY5sB7P5heYc4Y1HMGzJb8omSrDHYGeCy77ynFt9DLjZkVbicgq1aFKmhiRGFNox8RzhkVF8",
  "key33": "2dWXs6Wbxo2KhWctbp8VdiZrWSNBQebKayMk1m74mkHSK5wu7JzQC2wMsr33wixRXwgAPeaEyUG4AV1D5BtjNAfm",
  "key34": "3yuDgcFp35mefvUrPTX7857Kbj2eXWpoYFBL7MFFnxKXSUo5VG2u9Saki7CdVDyAdYhu3mbhgPp3QoFqyS2pUHX5",
  "key35": "3kYa2YKEoC9V1pKb1D9SKAVywbjNQTAq17cUQivRnd4m897trv7zm7dqaLSCaGhpBnwKAbXE5SC6a67Jio1voHpC",
  "key36": "33Kobd22RMRQYjwVuAEpwbpc3jczspgNpB8X6jULTPCttzRAuiqiHrzufv4nCLmc9FZb6U3dGvGgfYVoi1Ymnyrv",
  "key37": "3o9WKutr5U2yzV567m3WCBi2J4tH3fvPNjyBbJavgFVqAf1rh1Srt1wZ89W2foeLmmFpry96RMd79smFWprps9ti",
  "key38": "2nVySDjvchizJMrXRqeRno6NsywZytbgMoVeVmx4mbQe7eD8Xpe8Y47MJtV5tLTZqHUgarbwRtV2e129rPxPGY8A",
  "key39": "cbNSiHRWL6tZVRHbBgY9RtCF5xZjMTkzqLUQe3e2DjZC7zkp3ChfLHUuqa3Miwp7gXzKUybeyCs4itCwiLc2rza",
  "key40": "6TdYdSQpM5odgMEV9h5ptUmSVKYDeDpTQ2ichHUCCLWsBC3HVFkKxqDwFcLQxEAYVJrTgYKSGKq6nQwJJBgWcXm"
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
