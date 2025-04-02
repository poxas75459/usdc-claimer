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
    "TZuo8UUQXLFdBrktuGqymb889uSHCn8tBamx5wsRVAjjB5yLMFnoaLi5R5jjJV2dzu8vtkZaDcshrjruCdUmQRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iS8L2nct7hygivDgb5FnxeNkqktasoZErjbEbbH1GmK5KZRqLaE2hQkUcKiDb6Uf7mAytB1ajaTjvs9aMcg3Spq",
  "key1": "2xMRSA59ggcaA2HpL8mw8g97e88SiRnAeNZHRXawuBt1Gu59LGBcFPzuSrSMKEX3gZ5f6A8qSP9u5rpaLgdBbnU6",
  "key2": "26nsQqrXWaj81mhJVA3DETPgcySmHPsiSqJrLW8sLYoZ6SP27uuZdbRCFSorguw3WmF15y5KrJYqA7PxrJAYhnQG",
  "key3": "2TG5vUyY1DexyFsypX7jLZ7WSjkEvcj3veAsS7LzWZ6nkCPFPH8uUQhPxCKpGAqVPENkKf1bDh5mxhgUjsdRggWr",
  "key4": "4fQkakeQt5bpPtgAEzyY3saeHBVFwPqAopzWTdsv6iZ8QNvRvq326ewGJu2KtKVN7hx1WKapMRsEunzWy6fQJdjh",
  "key5": "w6s1QwPK4Mrtk3XDZy9sDJyChGGsDeZ1w7HzjhEvjKKN8XgsfRnwvRVTvccJ5FMs4FxGyt8x3uVjXZhMYbkuCET",
  "key6": "AbgTqi7o6pQvwfNLpuNsxMGvJanvAQB55KXwR8w5WPiLLCGrByUfE4QbvzMeHwZn1ZQhDUkJCLPdrpCf7XEcowX",
  "key7": "2tk2BMnd556psGx1vU1ZfwGUQDK7cT42sAhCrNAWJ5fVzfMjJ6rrPdUwSLGiE592Lra6eja2VEYUCmRUd1UTLVkQ",
  "key8": "2sXhLoCT5cSbcSYHReXbBLNiMEroiq5qYNHvADVYrb94HeQSJ7xM8SVZ7XAWGeCQSvD75ZwerHhGV6hDkqxo9K61",
  "key9": "YzYMmcV7ZX1p9WrAhmd8maq2KZRr5yiCSof3ZBkYMoo4PY9cQ2YRLucZqw4xTL9G9ocE3SW87zW34yUhKLWJT9k",
  "key10": "51QmZ1ABLsAXxtwWraU676csh5EdaYj7yTECNbhzE3wEhXMhocC4cUykoZYD6t9saAKA58cCWLTvQsmBQc7wJ25a",
  "key11": "55pZxMaP1NwfjmQhLitfk7Cm8ieqbQFE5KhbqtiNgD44TjHC171tNDqGqmas3Ag7zknPZcEgmzWjFEtLUeht8QWt",
  "key12": "5tyFVCyqKKvJ1ckQRnLCMiWFP8FWvnYcc9Pa5bCp2EfH5BAMzCVSUsYnjWtMi5dQ5xEwQVj5XYJSeRBbm4iu6J8p",
  "key13": "3u63Em1Wwr6EkDfTRBabJdyApF3si2wwUqKADj8Z2KZZ8uBSk4NxDECRpNbU16p6TSZymZSuK6TS9ZugkteaNZr8",
  "key14": "22jqNsPfGkK8KmD6VH9RNSTH564aj7NK8DF6AJEjZGWY7vjPPDw6jTSxsZcqEYzmTMqmnssP71ZMmXnHmGZUjgo4",
  "key15": "qQw3umxkK3DVdazVnR53gyw3qnEK8ofiRrvkz6B4edDRa75gg9AtMfqYKtRuoMYYp8iBRLmd5Ey4VeM9izMiiyp",
  "key16": "3ENTe6a4fMR3AMBhFz4QFNT6GkCTwTCPWAhKuakThUMMs6S5bLmRzwbm3VhiJXXQHReZ364VUUDQ1thrf5mD9cdX",
  "key17": "5cfcMPVgiHKF5UwBhAiJhHneF1zj3NvhggqKxsXApDqygSb4tc3YVhV498TFniYUNfE4nc61WQhYJ4CGtnRYkjMP",
  "key18": "maiwyLbsptM917YN2jduH7rDsqvzCd2YvTccEmMg5YacmL3B4PDDLCoKoSViayoqXw5715qZWWHzr7De84TaMBb",
  "key19": "3NQxoLHXNKsbGxQsS552iHiRgDJuoBYFPyvwdrfJ8YqCXUgwf6kLKqVTqqdWQJZUrAKaYNrgCg5zbcTnVRNV6u21",
  "key20": "48jYyZoswFd78V7UZj8ztPpGFoB8K2BDqiqKCDjugL2vRaT8ELaP7tL7WCxC5Z2QaCqofumggHxzgFG6V8m9gtKX",
  "key21": "5cPH3qbJnznpb9iFAxJqNbaqRMYjrR5zsCEFKuVcBTGcTcrfLPjMLof4Rq1qhTjU2SLvTtigHiH81B8KyGTLK5cq",
  "key22": "28bBeptiYnSfpJsNtoQqSZRNbu12yofn6yT1kujLer6SMBv5PM1CLv3D5JAqJNdMjh8zxgWBPd21p4CyDtxa71ku",
  "key23": "48x3SGLesDTZejrDUW4iHiYxE9DDvvW9crzN68oApVMnR5FQhbFyPAJUaDaxRMffkWNqKEDhSQeDHUQzLJ18rdLd",
  "key24": "31tkCzsPWAEzsw1p9WsPGdxA6mkSqTG74MRPk2Yz1vdKE9PcDp4M3cGXXrRkbVY94QSiWbdK4QbPMBYpiGqK6dHj",
  "key25": "2mN2UwskiqQhCL8Uo3C4cTdubEWd9grXKTCLLQM1PQokNMHmwvtpmwwdWmUZZGXChc3i4rzQPcgAjedrHmNadZqz",
  "key26": "4Vq82bHgVxidVjpgErTzporiM38zoSgR7UEmJE2Czo7McAWcdLGN1K3VkCG5AQbbtej3CYggyJViFGg6AtzPe9LA",
  "key27": "3wkbFV1f4Rpnq8ww16goYYfaecjGv18ShrLU4BMTZzKnxW8yVcuQD1uTTRWcP48C3BhuRdLCWfHAWGEPjmUEwN2j",
  "key28": "27ZZJVDgoH78r4H44PhcYDciqhV9J7sUXCyYCLkRyy9ajzP8RsFkM8rBQML6DTzzQawSSiJrZJK8rFBm6Ydspmke",
  "key29": "31w2DKR7hwkKLxEYSyDTQweJ2z6p772RSbWj7pi63qVyEfoPtoiiBGs5hxR9Pr5AhvzbMLN1YX155okFNjrj931z",
  "key30": "gW2ajoX5ePh8ktKBnWAHaNK5WKd3KoPLHcPh6gcuuHpx9EfFjwDzrstrbVn1DBgm8QJwX3Ti9TdS9UmAiE5xoea",
  "key31": "37EjRi4L6BJKZ3MAyR3Lr24CZfodVFQToxiKNaRTz8NxJQLBaxUCLst52NQgc6VpGQ8KhNq4g5Awf3a5emJDqq73",
  "key32": "4Axqr7VXZB9HFEJsffhVYB9jTV62CRn16CysqJijU6dwZ35Y8bFBYQwrJeVi911cGtG1n4sRZ8QDJMBDzzAVWv6t",
  "key33": "3PEgZUN13Z79k1P1QW4J2XYmWLmCVv1WyV2n6FMV6V6fpL7B5pr3UPcwymcmDR52bFmkTV5LJicAuv8TDChxwGvP",
  "key34": "2jewd9T6fxbcT9p8VggFiHcBexC7ZLWUFW7b5WZb7XnDaFL3aevBCreoGYkPCdcNvRxi2cgJ35jqbqdewNpEjctn",
  "key35": "ogXRpWhg3QJ6np3v7SsdxQQyghvBmswtM5GqMjVBn7zQ4rCEAyF2cRqzTnqo7PisKW9d28eEkLr9TCyJnFExTrY",
  "key36": "39yLqpWFpSzB7cKsaWXb8pzNNiXdFSn6g5pFV2X7Fb74dQzhLd3PPLAU3D3PN8ChJ4cDsmMBGB2rTWYfrve7uBi",
  "key37": "3EhqWyYq3rfsywAroghj25Co8nYyYbF4tmXDVJEw68jbbh4UW4b5yMR8Smtrb6exT8bHENspB8qugYXkVgXAikjt",
  "key38": "2dU6N4stoAUeaE7iRz1QmG3Hg18d6HTmwkkA4vA4QRjZPKRHJq9GyroMsgJcKLwP8WQ4CTgVKdLD4KRHU1TBinxa",
  "key39": "obpeBkMGhbaqkYQJ1kCgpnbvbHXQcqh9o8EoLFQpsy1YSUiS1b1a7EmZcnjVFp4qA2CAksQp1oogtdzFSnp331x",
  "key40": "43ZqJrP2xRhDLrUS2wfLRTyDzUgFNju19tE4dJN1AByHdjTKKeQpFerQCeCgBc6kYbr2uoJAAYRv4mJDo1BVPVWd",
  "key41": "4rtvi82eYSGD1sp4AA9YiT7yXejM3kRaLVqsRwYpkKPjS1EQwTd1NW9LY8HmdV6TEXKsCXV59mZbumUD4UAQXxY5",
  "key42": "2xGG46j6ZoEPuUJjJPxP4VxQTiZToJaEMJgnAMRkq6qdEsKc2F9sUThdJuZ66Uzt8KQT4PrFKFgQtUMHiGFBJvUu",
  "key43": "4JeHUCtQeWRnBwQeviXZ3cfEiVJXGSPdwi6vB4zuF8AZ1DfQHEFFx4xqJg7r7kPiD1UQ7gun6mzzPThf4kzEP5wu",
  "key44": "4CvXpTBW4HVcWt9zvXy6SqVc1PbUcx2Dadt8YSonXowC8ZiGkHR8tmpwxYR2jbR1K4FZoVcBp9rj3d1da7NBFBXQ",
  "key45": "63ZUznxbW75DHjsxVbP7ytsYgfXohSNwB5JypLAhyVyjoSogRkP2uN9TyiBRKdmT65R8pbegcyv4bky9Jk5eeWEn",
  "key46": "2MmoLvSesiLU9x4NmvnXJDsgMtaxK12cSV5Hhid4EC73HAGeoBCQqsEnrZ1KQRCoZ71S5FvaBvxW7fKpi25tK69R",
  "key47": "5ezNCp1BdsFGfxDUiyMDyRLzfN7G6CrpMigbKKceF75wDHcL8KQuUCTjLrtD27FV7izffUyF5qWeYnG2hLJaheqV"
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
