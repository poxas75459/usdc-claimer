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
    "5QczbVkNmGN2z3CoXAAyUThD5Cvurm9NnesaSaUbdbnaobiYWwb2YKYGgK9mkKTNZxRcuVWjZBveJfQtxZ2TcEnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gBnnAyuUkpuGy8syeY9XUCEHFRt6h6tcCCHa1HYiuj7ZCWU7VgbXpsWkFpnDCCWE82kTfVPvdGaE2eRfr6Zh8wK",
  "key1": "2KCav7s3dUGBet7hrT4is9LydZucEn3SRjmDjTdyVR5Ap9RNEBkaebq9dnBk29Ubjtp37Y7Lkjho1xDEMh4xh5Xe",
  "key2": "31JKLzCTVNNZQEMvtnuC9fcH7neau7uRLVZRr3dL9rMb2PK96agNFPce3y6eVUY5GMhtzTpLAFST7rva6bUcymHh",
  "key3": "5hGewdYQV7TomnUaeCxtqbFYjoBNuK2FYW1Uz2YWwLFXcQ9mUHP7yksqKorXFpRjzkaiWr2ZChi27ZRgBmFcabWt",
  "key4": "4trfXquc2iLwLJxmFgKQ98DabbQUP2QppWjQGh5ZTzpczkmF8KBSXG665kVodDn6ZrVoEVqY4ppUeKE5wcjcvmFo",
  "key5": "3thXoUbgAcniAmy6jxSMwjDkNvFspacWZPqunHorPLR5KJYfwMqpp1mpgxfNkoFzdpHUxLyq2EYmEjaRWjXuYwtj",
  "key6": "5oSkgjyW6BZ7p23Z933U5BfMew99B3jp1qua9wc8o3MVzq4v4Xnkbmg7mZXP6qC7m8vKQHdC49f6AEJZRVcWT7pe",
  "key7": "2PNG1q1JWsDQRWgPCDv5ifbJPcT8S5MnBkTwLVchV9MtJTaAmRxsuzvxtNxTwY1H7Mp94oJg6tNHj6aLBB9M3Rqu",
  "key8": "3d71cHKAbkVB9cGoijr3irjja24QX2otTdwwnyVc3nVD5hGGbDTAj7f35meAX9b3xjayusDxJXmGwTCprtCJMbKg",
  "key9": "3HU5dVVfTyrSAjrNC7yYYSPtSGoQQko5B9AizmMnzfoCv4szGJ2dPrEFYZQCyEEcRdPgeDsUMRhAw84e1HcEwaMN",
  "key10": "5CYLa34LX2E4zvt2pW552v4ZkLCREqtEfzTkbiyWZnSH4H7S5Cwg7n1QsKH8cnz8RhcLy7z4jF7qYJtvo2HbH2s9",
  "key11": "62N6WEPn71vvWCgSDZZdqifKbgC51tXYjtDs2SexupVy56v4KmN6RXRRA5vubvUD14Y6pH4G1nFcXijDLXwfMGNQ",
  "key12": "XpfZfzqns2r38Si1PXpmER5thhC3CDyJewD3PnxpJKqT8nrU3BfsUvabMr2XTAU4e9VeNPsm3RQVRGtNHFhX6PG",
  "key13": "5ZpJEqfVP4NdzKBtK5mMFMsz8m5EDEzXnNLVLKxjGp7BQkR7NAVsdSD7TYUMJYyyznfckhdpsysCJbM4LSL1YEh6",
  "key14": "3HodtXcBWb8t55gPPR9xkXxirFMAzpyNtqBkonJfdYTzbF57bnctSyfUT2rYptbpw8GFkcKpbfwNiB4gTXkxhXKt",
  "key15": "58JrmAz21B5cnKz3kCnAMSEnRDLRK6eZQCYNaBRcjSa5EfgDKKMciMWc42DGf8iBgLCFqejitArs91kV4UQRJxPK",
  "key16": "3uq8JkU6cktY6MsvG2vFSCvuFhqHWKkPxuKqTeCuUg9nXsFQonrr7YQhA2VwjxQv4FfxdsU8AAL3hA7csNo1fQHy",
  "key17": "gFJZ3QtejDuYCQumjFNvje1Wi72FC6pU8RRTBr4YxivMN4JkTEtCELJRj8imbAs59Kdwq1iWjRoVgTmHxLzeq4q",
  "key18": "3kUCLcaCaWzdoyYcmiWGYM2sr9CAHLBU1mc8HievDcUmLKaYXAiinHje1vKhQM8CxwW4QLYh2MReGtngqqyaWog5",
  "key19": "25hnNQiU9JKHbeHLETbHqdxr17LSK3NGzqHgTUiYvHzhhR5ZZvPmsVqNe16N6KdUnm2ixSMkzguAFBJnBnxGrjK5",
  "key20": "3JhTpeJmF7RFHCUhLS2fZy6sHDATeN1163bGEJqtQDL71kHUYHT5dLjMGbnobzpK3hYbVdiv48r744Xcgdisgw8A",
  "key21": "FVKabGDJA2KY8ZprJELKzimi2FJb3kxt2B4A2BqrRHX4przh1dt4VcBDq6G2A4iHndoBg8SGaHaGxgkyMBrr64V",
  "key22": "5VEnMfTmRnYJ6f6mpWGmpaCxbZ1FjFQbj6QaBDLcDsyS3NUvomkC6WwNT1w4nt4Ty1DSnjrhn4TtiF3mBf4qwoRv",
  "key23": "3S85esWYsuPNeJpjs5oyfXuaakkQ6CSm4BBDYoPo3NnH3idMoRmgHjafdRMDm3gjvZHiBuNTnEucJ9dBGvvsZoHD",
  "key24": "2WFqiAraNfKtjJ9sTPf12U8qY6Hj9o47rwZs61DAMRivTUc6opKaro6yRjAj8tBSG4ntis3eoGGwjyJ4nyMy8EVj",
  "key25": "5bRAm25XChPcUvdn2M3DoMEKVnLSGdZov52DZU5Zsvz1gPEpTSakshKNkRPaMyQajN5xDmADwQw3KCspjerqQbKQ",
  "key26": "2y19JbPsYj7LvkkFeh1VTeUoP3XGzGFyMr3AyFG9eFLDneAJXvMN9S29Cj5gDqckhA1AYWcnEj4f9JfgxYjzrhqN",
  "key27": "4VufhSJBb3sWYCHjtLV9h1y8RJBSkd6DQTxoCWNDVBF6VrzvjT7tPKvRjepfHK6qnfVHm718xhVCNzkeF864G523",
  "key28": "bBMqyhkfmTUJ8fJPAMqtHBq5b2d5nCrPVjELa1Fd8sHq813i5c3D6CcGEZr3XnLLkwkodaupBvefKRyS4g3EVb6",
  "key29": "2rkbbXUsVd2onA5PEFHuEWdU684VxPKKeTiFM3tsnC3aMbEhrkJFWsFyvXrLeD5bLjMTmuRpFH7p9WMnSMNkvyS2",
  "key30": "5fmxZD1zrUKTeTqcNLg2F9Ycw7ogqsodJ5gJ7g9gWdmf5qUitmypBSLqAV5dvdxX7F9nERGjibBAjY7j7G1XuagE",
  "key31": "3xrSVKvrQuPxFUz8eXQ3GX3abJxrSF6Vm4U1tyeayS6eHsYkYptDDmiRRZ6hwmBivq8d6JqVS2nG6r3iShipAKre",
  "key32": "5hs9uza52ABGet8bAHRXHYkprfHYeU8qH1AcA2qKYEt8NwqLcoztXVmijSYB6fU5Yb7UzuVagMWBk71PJpPTjV5w",
  "key33": "5nKcfRGnwvg8ZwkcNJFDFtQzdakMcf8Ftn9hnCUDbKZmowtVrQLVZtWNH2iNumHtYJAWKed1zdg9qA7WtTsCyRdT",
  "key34": "2surLjDgPnbUEjw7TWCrbDZykpdi42aeYwLaMTPKGLAxLnD5PUmANzRz8Dr2FRqXC5VZm88xUfaHk24ALfPEqYWC",
  "key35": "2eEEp3DBTCBPb5k1EshbwGoFSfwRZcdgR5WJh1DcZcPNfxUY41gUqpyjZMevmztdrnuLLbmizkce55Eg4hfvhcML",
  "key36": "5S64j7LjvfJhEdcHATFDPRVETmDL3qvjHjazX2SNwKwpq7YK6RGWzhE13MmA7r1m2hfDzxHTpG9RZMVuCZ76ggRS",
  "key37": "6xot3BVgaUPcd7Aihpw1CLyJaREG9Q3nUd4Vv4J1VJwdFttchC5Swsa7ebn4Bpu9Ly6UKGtvVEsaQEaB3njsYzw",
  "key38": "2g2aosN2i3psd4TuH6Cgnd2HGQBTkXgChNYgYNJizcRFFryw21UG3G9n2ouKFpe65ExnCNNqSPxpNWf2pDQjTJaH",
  "key39": "3cQbRnsEvFXE4aiupmtHoFRVVWWaiYDnDZ94rhp2qqNJEXMwgc1TpeuoWfuTgfPnyWu5Nv2jC84cj1KWc6ssJfVe",
  "key40": "4Pru8YLTWHVonEZHGmujjXocJRyHNn1bZmjQQ54qedAYtuJhZkrh8sc6cf6NH2r2HpBKiJE3RhqJboxvkQuk1fzc",
  "key41": "3PYFfk6tkn9gDBKT5V7A3No8dNV2oa3tdZFZafkw3Zps4LkrJiKPYsyXXZ2CzZ9ANVMmS2zsXk6en9zXVC12A78S",
  "key42": "4JZZyGusf336wrbqPJENAySgLjrBpKZ3EaLDhrh3HpmVQfBhsVc6Qs74VRAPXu2AF7NZ6oX3WmCuL4jvuHGL2bkx",
  "key43": "48W5C5uZM8NAjt21jTFCz81a2Jh1s7CfFXDL25bBMqdZzAxEB93xQSNbKkia5vf6hZwEREioWR3wdiJSLfAMFgne",
  "key44": "5ptHttRyEbw5Qxf5JtjiGCRTPwKUtwcGdtGyK6YondCCU6FKFob4113bh7bEnn7kd65xzfksFS56rdPBr3ivBiis",
  "key45": "3CiWak1dYUa465mAvkcHFwKatxYTfYEF9R1uPVPuVaYJJDeZG8ZjqSshyMRHRayE7TZtwtdJMH6HvFwQYo2Zv7H8",
  "key46": "27xS2ueDjFrzjNTe9MQFwDjo166dsprn6ugMXwY9wM8eQea7A8oN6mgfQQpZ43ScBtL2XNHDPnBrJ5PnJgoRUbuH",
  "key47": "4b9S5M6s3Se5JhTo3XrScvMBy7cjkWzxAogZjGFT7g3V4rLNFhKTj2edxWpWiJSGVp3sshMbBujpgPBVCmuA1G9p",
  "key48": "5apuKmF4enFwEQVmVuWhWGa7pTQ6QndpbiUgh3vBb1GJLXTH9Xpbs1RLQZ7hZufgh4quA7ijh7mcniYiPvdnEfGx",
  "key49": "4vK2Dv5Hxuxbffne9HsJm29GtatdA2xFLpw885TEgkzgUyJuLJQiEDBPkWMfcu6SAqvUtABj4Wt4sr6oJeJn6BQr"
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
