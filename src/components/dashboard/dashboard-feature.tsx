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
    "5eG7kTrQLWSaNaRVExWC5guXkix9YheoZGuJg2GXKY2K1NCYcP7X2TykGsdvkNMvnvo4odXaUye7n46tCtaACdya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QSMYSFW1HehgwLPngjzz54ZjULBVVwcsB6q4gq46kf19r7z8doyr8RERpwMoSBQk7u3ASSFSiKq5En1QDykA3Up",
  "key1": "5ki58LwBMFYny7gjhovNeRDq2zFuwKv3kcinFWL3oEkQHr4fCNjYBFYX8irLKCfrztg254AHN5YDvAEzqpJoLxLY",
  "key2": "DkLVHjVgiNjH9m2fzr1GYvbLhmBFHM4ui7YxYo3bxxYZ18e3NVHtFV8aF9VbvfJs8RkRLD53cEzznnd5BZU5JQr",
  "key3": "2RsqUA8JXzg4o8zLKuhYsoCACPkX54GfAfg9UBbn4HAQPvFa7QudaVnfCcbRtUp7ormTuPgya7rNtMPQNYPsMpiL",
  "key4": "4ifsfEFHC2g6Ab5YmcHu2zCxcEqMB2uppjKjc93T9m9rb1H8Ue5CjeuXqjyaqSCScffDJ8zrfA53TP4Qm8f2y8bV",
  "key5": "5ZpAaBi4ektpzb96eumKquWNAAPzDUxTKkch88LeKnq7qWMCnPvUaV9k771pqTC8uCkRGnVRzwo5mhAW1QSbTrRv",
  "key6": "5QW72EejYkH4JBfpeKWF1LHnxvF7skAHyUXRtcSRHuHmBBXzu5bTZ396FgJYvBJ7SCqi4BVLvdmzPhZDa7QQ9jbs",
  "key7": "bQF6FvSSWzWf5RXkWBQJANFcXKHFoQyKvTd3zKEkig3cfYHQStTBKA8zYBBZ7SKYmmxt3LerdRyLetGCUJ6EP9y",
  "key8": "5z6wajNjMdLeZjSrFUKeFmoEyrEnKGVKN13frZhBMHDsyEqDeQBmT85ioPmteRrDJLa4ZaGkWfbG99ANaSEqRfH2",
  "key9": "4wJezaYCnqVoQU9bHmEDe7YLic3GPXqsHCpRTK5Qx6FFwkP7T9f53gAPh4aDUZU7XsxoxuPV7berFrxLEnRSpfuW",
  "key10": "aQDF4YD6AeUjuXgmmDpFYZdv3Eowe5PXL71iguynEpncoYDuy5qJ298yBBhqB85GKwb7z7uxshDrDgPaRH8FiLU",
  "key11": "5U9fKU5FX9kDqyx1qVSgmMAxUvb8xorJfx5qW1faM2PsoAHrQwt54jVsepDfrvGfdkGJ3UGE9nvXGVgUszKyXtx1",
  "key12": "4vSGhXP4eUWXs282dPpXFjZmA9G3xio5Cde2y72KNnRLTfohzEkQ6GqbwdhZ8TbNFzkDtoKG37SvmHxx83p5m6GV",
  "key13": "2zh44yPGjjZkSrDK5AM3SvQvbKiXzVbMYa28Fu3FspsfUsyxAjkXcBtCbo3AuPMeBdQ3Vyfvi7NFsrrHrNwy4hEh",
  "key14": "23eB6TZMPbzmkvR4gVqVnEzDqqPCir55J281wgq5e29Qc7JjAGg3QaqtRKXkXecFgkgYaknqv63XNXho7HfMDcvd",
  "key15": "GtEXqFz5N1ViwvRodbHvKsEQYCLqeoNykazz4eGcFHmmRJovb2znjrnGw4NcV64C9WoabxRJqef4pQKoBHYmxRG",
  "key16": "LE3YVkZU5Sxn4vN3asxqnu3NvteMg24nDQiV2ipKHjRJXYNTZe1aSecKcB5dHLNgeG3wcWZjr6hJAjm1wuiDvpS",
  "key17": "2nUvXSLBRdz3h8rgmUD8cJkDSosC3NUY7gDSozGWUyFKXKzNYQzPQZ33nfmSpNKvmdCZju4ghcxDiWYkMoa2C7TR",
  "key18": "2hSGJ4GL7uBjyTzHkJKNixW6KR44xnU2E8YkXFQu5VSKLDsK1dghr1ErX5mxVM5kwAY3SZUCHvDUoSv9sPgEzmna",
  "key19": "5WWcaF9nUynfjxECnfcE9q2figArznmn1WFUi1CAb5mkEoMMNT9EgbC1Y7KfDPrzfL9LSNM8pCMVvgE5kbnjY8Sy",
  "key20": "21kvUUc6xGXAhuW5kkeM7qHY93zUiWv415xVUhPo47MZTzsq8DRrUSbRLCAn96RRhbcPEa2t1nCENTUrBnDdHe68",
  "key21": "YV1Ky5BEPiSPwSa4D5FoGD7Nc3CCNUTM6NsnWUaUFhj5v1E4QREzxvcXsEdVVa5oyzcYKP3JV7JS1PCVdgo1aC5",
  "key22": "3CESLaQ6RoViGDDJKQt2EhusPMthwqP2seu9qcpso3TRXRNyjjJgRsvyyHvBdeuMHg25nes2A8Tf4ZD6EsVm9dd1",
  "key23": "2SHHuyYkQbVGscx7n6V6xu5dsGsYCQU9M1QzY9Exs22LVxMwEq5xNvHWGxLF9XDAVDp6ppH1yQCeS479SPJTHGQ1",
  "key24": "4UevteZycz6gK8Bwcoq6kPeibH8nW4gCpbcVCriWXvZRfGaVi512LexEoeNEr6Cy5AKnzsM7UvgDDXvxpaAtBZ5s",
  "key25": "woLQZGZNDcsTyouZSJ5EmQoVRCyHX88ws7gS6x9R8FjDgJ6GpoBwCNuwXVmpPeTpoJk7egqJ37SNfqLHUjqz74i",
  "key26": "46yiCTmSh9bgU6Y9Ef5ZwnF8rB8gbKCfFbdj7rqQHAZYNFFVCtWp21CeoE6yngmoCcLn8fbMgbSLU3nHUiXe6Pef",
  "key27": "5yGMNGX2m2Nkoz2Q8AojvJQHh93AY7vw3773prqNVi6Kd2DdAwnRM9tQYHewuHtCfxueHPZXuTitM2g2Y5FhaP1U",
  "key28": "3D5qEtA8SEqvkvMwRtTMDdLbRwsrgoXhGjigKtmcFnVdHDSomPtTaF2NRaV1x5K2VUBFNv7mUtRn7aQWdySSWhJX",
  "key29": "5cc7ewu5dRkBozH6YaaLgfw8JpysxcYxabqX4yyxfnMbqo7Hic9tJR1oQYn6WEKoT93ZusDd7Wx8dRym1dXfossX",
  "key30": "7m8EJSXD3cbFXDUVLx5oaHEhbjK8y2tVXkXi97GxcriEsXbrKvMhSveJYnhreMZNcEqoioMHktJJPnDas5N8sXb",
  "key31": "58VYcKPyueQdBW3idgsYdMAcgK7jXEJxpeL6GqAwBGdSGaoLR7av3MEksbs4NZzoGP9vxQCqvDPC1dSquAugi8Pf",
  "key32": "42NrN7FJBnG28CgDf1cJSq1v4oHwVQR8iwYTz1H7XXF2iz3spGNJf815ZJG7cwVQm5nrrQky3eku1s3Xf6VvMLA1",
  "key33": "47nVvRtZ88aJHRGSqSrv8DtuTKdW3exfgoP97txL8323wfRbqFhYgnG9ZwhPxtM28PWwtJXiWxk38bJGfRZRfMjb",
  "key34": "ZarVxBWKtcvJ79gi9Hje4uwn8K93MXgEWkjbuGAnM8Ew2RqqbaPdLw5UteifKLgMgiAhKpsF1A5Gdz3MCPwUT7u",
  "key35": "3QsW5C6yd8zsUsCQc65RTbXzNcwBdHzJZAEufQE6YsGjZaKnzFuxVPEhcTBhMFTdhQBb7CwB1xUfm2SnP7PhEiwb",
  "key36": "3FNnRuRCceYMLwwNTcDEquhQkfUTRvCcavv6BkbBdGLKx1KeBhWfnMhyEk3gLUt9wmX79k5v59UJcSNAGpQbnMBb",
  "key37": "2iDhbTapYm1kd5xe6fPitretAb3QQDam7bNV8Pz6cMgwX5nFy1W4uq7VTVY1Ny3KTBCemoX27kxUCTqXUeKnFPQ",
  "key38": "3oHtouvtSufJwjWvRxSakz5KAM37RN5i6JRgf1kbusrztaqTxMoqwbqx6WEZfDFbBwVFt78tEXgCBfCTFCAbxjjJ",
  "key39": "XRtjcGm68nv1ivTdEjT6bE1LE4HBTVSbH54LuZoQ6UAGfdhdrLtr7p1GHPgEm7tYKjGu9tUe7FFJB4W83yzMLG2",
  "key40": "58HZVkbfpYDxMVAi1Gemk8RpcQCFHT5sLn5QpH9qkmmP2QN5qcxPWcu9JY7ZXf7QybTNVGAmDqRnyGAVpwTwYCJt",
  "key41": "665ehcdwcCUFrVBLi7Eq9nTLV5GczyWro8Fmr1wRXotyBRaB9VZAAKYtiyHfPHPbZNutiEffBSoodTdcBsZVuoZ6",
  "key42": "HyTqeCPAcYxSiBz7kMZrFsLU7fsd6k8p8gCZn6XVVZ7xYHx2QD5wW7Lx7KVeD75dqBtzCWFs5fGn8Cq8RXKijJx",
  "key43": "Nbzr4cSmpiKghogQr6e6tQfjvEYNfWyEpYLyDfjZLMue3mvdNSWAGRRDBY1fDEPxM7jsRQAGoobawiVE4RwXAph"
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
