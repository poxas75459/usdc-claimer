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
    "2nP5ukcXKHrDqBBkc2hz244fZvnfcCQSwDbRHGhyN3S4CMan3uCZHuXS8yGQC5dQ8W5mSheHgerRVKcM2T4movnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1VFZZpFLC2zDkJTixvDgGZxnmsButoKhacqG6J617eno44VEvhVTqrJgMNQLDuMomE9goo8eCNarpne8oxXCbmQ",
  "key1": "4QRiQcNUwhBsBSgh5xQMkx9AcsSgP4WR7NgrharWtfa3biKXgYbUxQaJASBVGmfvWviqjRLzihjeUPkivszeVc6F",
  "key2": "4ur64Led7JDhuAw968Z4hzZB8m7WjmWHS2EiamkYBMyDo1kKq64dLVqygQVcxMddpNQnPDmVDitkha3ypGdUuGeY",
  "key3": "5BA4v85mvaAe3cp2LZET2foC5mNbNH25DXdv6WcY2HiXRcmxuE7VKHBgda5bbE9qV8Fh4ebBfGYBMaoNxy4cDc7C",
  "key4": "3NdRuxnVB37kmfnMZC39sxX4kt4aFEMiMWk7gE4mPMuXWdb3gwQ6xSvLkBswDjVeYZFpY2RiMcnvgSbG5CBLWtj2",
  "key5": "5bceKWkfXeX3LKM1ChX76maUHoZ7STpMPh8mwZvMccZ3pgF3chKR7Jfgo4hPdXSriTGACzPgcGAP3E9yjv2JSQ9j",
  "key6": "38iKVcHpMRJum1nudd6MpPbBi765bp2sH1837osi8wYtoZ8S2sTX8zonhq86haq99fhq4MABTiNcLaEef7ooXnJb",
  "key7": "55cHmeB6dghnvETbj4reBURu7Yhc42qGFR5162aX9wQMJvkdUBqWXAPTr9osebJPAMrNBjYvXwGJ4XLVDaut8xeC",
  "key8": "5RvkrN1gRSnz3efVs63jGcdeMGpvBsc6UABm6nJC7q524gGQWmyYuCP3n61k97nLKHGECA1PRRU1DKaVJPnwrBtb",
  "key9": "5zeg218CgnLJzggFArufQQ4HHCyXoFYitnY94gsS6RCtXU7miYntWTtDKVyRspwBofGnUdzb6Yj3uLovD5gwKSqy",
  "key10": "2Me4s9ex2MrWDM4JbwWKYuhT9CMNoNc15Py3CRCd9F6TKEr8aB5QZpJUfLkEDjYqZNM2zRDieAsbZFpL11FzQoDP",
  "key11": "4T6sDM77YUFPrBdYDX8Pfp1P28AC5vTY8afrGEuX4RNFCbveKoQUZrWFQXDaBRtt7AVCvodgFQ95HM5zV5E4vTZ2",
  "key12": "HBuVkpKTuxZd66x4KwBSEFMShXML3nwX7Ln868SqWbfM6MR7WkUWaN9FyW6C7A8DCzA6eLWS5TL7a9FKduYr7yL",
  "key13": "5tGM6PwARSAHvYiPY7A8u3TAZjewuM36wwgri8UFTFKC3s22i3wjG2yf8kkSKLK2HYg9Ut2P15omvh8sWfUMHMGK",
  "key14": "2RDj9bWeEPx7sU7AuSvRA2AMj4dsabKienqfffBpxPwyWRHCdQ7GAzJfb6iiLCAkPewDYxvR8gjvWVQ8C5DfA6Kn",
  "key15": "2eNCfeHVit82QzMTTm49hFzGTTg2RBLVqBvZmD7oou7jnE1N1dycSvmeVYGBp7DE5RGQxR4tZhVFxXPzt9b6MY2p",
  "key16": "4iZm4GdqQ49vE8F6t7w3LXqChBMrt52WWZLSm68t5RGQvCiq6R6ybXsH4cSrGZPQa9wFn6MRJLvmrkic1UooVa2K",
  "key17": "3NwEDWX9LYe9UdZQaAa6uznShyPydV2LpkNEgEgYdAtqCs1BAceywJCmufzDaUSW6fosCCaqUdEtAbqWqsTpYWiY",
  "key18": "2wmDckK9Y5t5gcMNEPfPvYJtoY9WSJZyXQ4VBuqkH7mK1Qr2M5ewdVUiB2JgMMdkt87wdidr6pmHNczPKJQ5LdDV",
  "key19": "5sUxHMRjvz5AYJRvYGfYue34PoepWbXmckucq5LUyTx3WKe41pXMbAHaZ8kQX2FyiZn7WkSAJrFajx6CCUMjeXRy",
  "key20": "txTSffxirbvdcM53qLVp2SR8rdiBeQY1UWZLWTQi975yaoNPXMRydCXwCJZ2yWchcmiva3sahsBYP75vwQG1Hgy",
  "key21": "ugEWU7XuMvy17PACSi18pjEng3HjxWRAdFcMQrqqzhSTU7cu5qYZQukWSUdy5i48pAuyneouBszrLYoCJELHbWL",
  "key22": "x42YxMeLd8kZQ58sMMQrwYzx9Z7D7JFs935KFnxsco9xV9xuvuWQu4ifoERrwPnACDeXkU6c5BZFqfQGbU9BqGB",
  "key23": "46bshkaqokMi47ekbMx2T45HdqWrex9DQt2SasNhN7NiSYnsCvbF31zvzyvzMDhcPxeCTCMf5yNxiWTDXmWShfYP",
  "key24": "5XbeWfJiuWsfEFRfL4oJ6iWRdCMMTaaVemBb9k4QX39ckD3L82xjhzR4Mc6QgVu9YRnNQqaEXYYPeBMt5PnDDRRL",
  "key25": "4rJe2HXQ2XweH3iK2nMADVtj87ZEprhMDcD2WY5NQiUsRbWuCEnowTqh3b81YyEpgaxH9cDDQntfHKbfeRBzpwdM",
  "key26": "4TQAJJ8xp74Y7ivqLW9h4RTXRmTHK2zoA493L7aBkZVFRCWYsaJGkdB95xWdQtiSu4q5Pg777UnSABivcakUN3BA",
  "key27": "5fMHvrAnqZyfq2VPVb9NqhGMoHsxfMcrozpADxxU8urz1Zg44r99MPUNSSJHTi7hAEW48zDKYJDBi3VzmNg45VYw",
  "key28": "3Qrx8TG4dbYBuzc6HEpkEbJAE5Sonp3vWu73G5DRSMiUPBXeiGwZChMWk2fVsvHNzZDsGbWLpED8W9SQBzwzmyDs",
  "key29": "4LG391S4JuWsWzKJ6quZX1XpCJavtcLx6P86Zirq543N5eMm4TAUteCMvEmGSteTEAQKDeyR6TymnCPa8GHnvfjc",
  "key30": "5ewwALsQy34zYG5aj1N4ZSu2nxFNSLYQbDFipJbz4Vc9nVKGHAkYYTxRP1sQHmyym96bkbX7RZ1wWyTZZ89r46Eb",
  "key31": "5jvVYRnu5QsbrVnmshurmyqVj7WYG27FMcyNHBozKDkaMfBYhdzPjq2KJKPFWicorRAwizNYt3Rzk4pJwPpfvwyd",
  "key32": "2t4tMAMenp7QTPdHYycLCZ7hhAHPaXY9PE4EhC76et4domn69eTDbGaNjMGz8zsEjBsaj2MkWmVK3QwDQRcRxt7K",
  "key33": "EB4ERWuzFyG4rWoLDLbmLLZu9m9qmfc1kTr1viqQQt4G4Ac3tpWgdihqBm7eSMNTdyrUdpyiVLaeBFE2L6mPcWU",
  "key34": "57QshgFSHkgJ85ZPpwzEfLSG7QLRFqAzFgumv1fe3uRDNmzGHGyu9gnXrhWnug2JH7H1ZprVjWZmALYKWSxByWsH",
  "key35": "2RB1zAadCwQpR1KXvm2C6rBB5jzqVSAp122sYP7grrq8wJ5fDw2UwmbxKTy1c95dcwsf6JxzDHkGfQwiN5Y21afp",
  "key36": "t52K8mfcSqTARRNriLWT7Ek9zUdh165149CAWV17hwwppJrwcj2oH3vUUsZEevTzay4kD9s9nDemGFfpyUt3Ruf",
  "key37": "213RxuiMcGuuR6UroUBC6B71Cimn6W1kS92pzfmctwioDWSANQXgDBAEi4CeTmC1Tx3bD4nzzDdZxTukX6Y2fYkk",
  "key38": "4CgfqdCZzGbZF4URrvmiWT4RqQcPHFW4YYBwbPt4QaJ4y8HeRXUNQi2QVpoWgvPGwnPqttK3Je9ggHvvP9Yu2HgC",
  "key39": "2amm2dSSsWxVCRC13EDousmnzbMyN3UsawjkC8UBedmPjC3bTwkax5fEFXy8Ez5EtcAeXGuQsSfG18AXNQfAahMk"
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
