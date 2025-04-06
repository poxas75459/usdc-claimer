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
    "5RFfsMjBEm4B5yqQAHxGkQW9YjUtfLfP8Lnb3hiTjBGgcamVssGhj85oi4cZfWNostis73gTr153dnyBCo6Jvic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5APcLE4P3Y7WgPJ3VQaFemd4cgMkSsdnr9UXfZSVSU2u4no3dE4ct8ePAhDKKutGELW55XDPJb3BDAYBR1117WGA",
  "key1": "5rFUJuVnLdC4QeXxbdinhREqKQXk2Jaun7FnWAnfoNhbkCecAmM53k3c3w6oSnH5pcgHw5pkA3taVLpdcSbmqiL2",
  "key2": "43BKYLFyfbKMYDWuP3sbHTY9AoADRrpEb2gvEWgUuDJMe3fMuxM4NSdLW3CyEqsN5hf8eTUgtwYBjdwPX89LpJ5m",
  "key3": "4gZ6kcBw242pnwLSWXL2z3B1uX2XTutyEfAF2XbP3E8sCgAEHrZHWrfg1XcNpf63pKc2AyhvSkYFX2wbvg8DKyYA",
  "key4": "5QVuRSzrnH5CFGn9xiwAtsJz4zcUQk7imbDqktKHtj7Bi8XN8i37DxM7nykpC8WiUZBadAdN8ENYnLhuivNEwF6m",
  "key5": "2ZLv9PTgKtN6fPrgP3pwdwWvp3Mh83hce8DAxrhRBLJY6KpypNeqpxEXuHRh9mvgXEKE7t5oayda7B5rBMedE1Fu",
  "key6": "2mSH92DRpAwstCuWCCJGLwJACQs1r4WcMRVaBdswFmSVie1V4qC4C4Lwdzbv126tBXLxAXhgC157z7wMA7D7GA7K",
  "key7": "2K4u8fDoaGM8JgoZJMitC5FHYAoDd9mtKuMfUgiNYhyApNwSSYhb8VAqvQwvLUUErFi4yrtgKbV3WaZWuJW4UApf",
  "key8": "7JckrV565smkGWQWs3vUeGecEWMB23zqcRFd1xRw7R1Gnv78HNcBFM9Kad5uUEsXxXWoBXPkQB2QrE2eUfmACRH",
  "key9": "2BWDdzrMEajZvbbQ4coZ3WYaPL1Bqgmkpsf7u5ptAdKvACEg4kKJfvVeHBJ2CXGgayKAriGwotnZ2FBYj57QG43C",
  "key10": "4d3Cu14d7BsLFNWT9qDjosFaAuYjWdtkskA7e1zYqvssmRehLv1oSsQctryXrQhCttxuafKpuUaVgafKTpew9Xg",
  "key11": "633zkE4FU43hboy84FDiPzicSL7Lu4m5ZAujNMBp976xy7dDpCBiCHfEMLoDZXqLsVM4xF2mawnm9EYNFAN4EGoE",
  "key12": "4YCQbBMNc2JBFqQejsP8YguQqU61oHQYVk1AAu7XPEtuD8rBHYykw2BGGs3178KRrTi152wXY1S4jHQmkrBYq8un",
  "key13": "2ZU1uewnRYieSc8rYdvX6Gx4KdhnWq6svPprjaBRdhQN7a1XE75Jm6QLXb7K5Q3gd7rKFXRf3254nPjuzHLwMzrW",
  "key14": "ooioP1MmwyZr8c4DuKnK7SwwF8gdsBLjubU6XDGcFCi414VQJ5onUZXwrT6gDXURPMu3SdpHywoBE2au29cHCFE",
  "key15": "2RtNCuBSN87smbXRhDRPhqhSz5hVdb8jkUnim4HCPCwU6587Tv9YDs8hH9UDz8EtRonyZhryzUCX9Z6iu72zZwFk",
  "key16": "4WzLfQ5y9y4PYjs8XuxNWC7jToKD6hgS6xkKHw6iNV5S8Ph2jv7ckkieiqR4mfTCZfNLXd2F4D7uhuRnstttdeW2",
  "key17": "4jF3Mo7xWrkekV4uvMjzKPc4PmpQmjX3b7HQDkLFK8BoLG3xnaoFwUU5BtebGxnmqQ3VZdmFV4VniLCk66xxD3DK",
  "key18": "5kgkdYW1W9QS9LefLdFoVEehzFLRUv3nfGSx84PD4JQAVoLziAmUNwHXMTJyVWBmdh3k9oPYQtqrxJ8HGcGb2Arn",
  "key19": "5zwoVFnbbAz9tiefzxggWdnaSfDTbj1QKMGDdQUAWuLDGs94dqKfGDsEXtCnM9wvhWCS9uNZLnpZ7zvHNZ1BVyjZ",
  "key20": "5WW42AXmzkPqWFW87RmVKoLgkVeeovZjFACUsoQKTS8gJtgxybV5MyPTbaW1q3FAQaCXmRGHwXK8jaWGyhqHShPz",
  "key21": "3FmbwVSWte1uZGWkxi1yJEBD8sSaStUwZVopFaTYJniSJD35Jy93WZtCHHJneKyiBKYHrwg14SmqUvquefxGkxhA",
  "key22": "33FVpcRHuM8kH9mdHZpX5souKkKvhhNPK4XQ7pDc3j2AjkRpqbwDXUGzd2mdZZWvyvPoZHDMbpVjjktfqRx7d2yo",
  "key23": "4PTwmMJ2hesZfaZq78dKJbHQrfWS1Dn5RxZ5PixqDTTwPde1yLesXSwEyJ9KPAzMAegrCaQq5PcNttApYHYUMNZw",
  "key24": "2YqUheg5KiEjo1V3xGGqd16YXh5muNW9MMdepw7xDdJVnxYMN3JdwfhXHZTJu83S8obJRUce76AUEwkXaC3hTwWw",
  "key25": "5m568v1ksC4RVR4tSY6pHKAiceN29EX1zi2z2eqDAWedCnn1B9Rh2tLFXV7G5gTcSwTGeGFWsDPBrkFmsE9VPzFe",
  "key26": "2X5mvGwyBech93uucqudoxXPHXZxYjnj33uZXwPXBddNCziUNzUJcf7h8q6bS468ZkXNL3NtWjTimnDSP92LW9nT",
  "key27": "3oSy4dNAbPkTMVGdksDGRu2KEp4T1J9t7JeLqG9Hm6hh7uSovM2ASHZ2UzzkUfPrF27SBzneStg17YTZBRtU929",
  "key28": "5UMi7wfhgX9qHA3oBLcawpezEH4bDytyS9Zw3W52o1jcwVZaJzNCLGRncENKZ5g2G4XuMNYjFbBH219EW1iLzzYC",
  "key29": "238eorqBZR263EYJJ1L9PA5jLwmDb4duSNCMCXEcFepKRyxmopY9pQqoFWRBq7Q62U6Ayu3LcpvasWSHgTtHVv3i",
  "key30": "3fBNgBKVm6v5p7QqcXvJEwtwe3ULKPYqWi2Q7xKfHsDYwY9HZQJGTfaJqxsL55z6mGsXThYy33nSzL8scU4NCCUi",
  "key31": "4zcdcw7PR2G9p2iJiDZcDHxxHv7aEi53TzZgheLBvsuFMdLRK7zCBufmZPz6ePWBbCZb24mnJ9DN3NipXHhZynz7",
  "key32": "3dXun1rbaHtrvxjXQRtoBTJPf97f88UR4Kz9y8aMkps2ZcKiFQtcZQxwtiqK4YkksB3P4F5U8cJsbVZWL47nChuR",
  "key33": "zfyPaETz6x8Fv2eY88Luo1havppsTasSRcmdTzf7RxjyiP1jji7Zy9PhSWSumLbNoSkHkoLa7cfd81YyHBGyYbX",
  "key34": "4uN18PcJst5jxiowvgxehZSjDb9AF65mFszaBiNifNiGw6xkA4J2Xk511zpjFD9XRt1iKLkcESXgjKCrBGp3umxj",
  "key35": "3APnvqu2Liv5Dtc4Z5oJZ1CKt6ukXNjQtHP9T5HDYVW4SQkwDwCuRp4sfUMpbcJmrC1mZaxPUAsrp5PZBcLUiZvT",
  "key36": "3jiV1agkSY4JTj86vMfuzF2tuVuLfPBnNSSvAsfZUT3oLT8DFJTR5h69yV8ckustKZxBzJcBRKpzCDhKxYsjKCnc",
  "key37": "yfmWFUMJK7oQ5jbeaYMMswEWtDFHQDw6fiyoth7pifm1HvUq4CMQdWBex2awGiPPzCrHAszmJ1VmELHbPMJD9oT",
  "key38": "2FnXtTJPigBjQtYn5c2nUCn2nYryYqBpKwhDoKPFCJ2gcrpETZkDW2Mip6nDgPjX1pL6foSQq9bNR9sTFXmjBKCG"
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
