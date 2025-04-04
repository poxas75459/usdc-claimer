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
    "37XS42BQVUZGzZ4yzxEYVKVDqpiLRvMmfy3gVbJ9xAwS9dmnDQBtHtySEdmtc2sYMztoUrYCA8v7N3wS5KRz1NHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jJR7Eu7hp2rShQmAV4Q9JiEp6e9gTMhKNiz68UgZwSML47RZiVWCaN8RbQcASXm7cgrduCfAWri6VmbJaHxwmC5",
  "key1": "3KaVELZE7RuW6L5vs7a1NXdiSoJKcNZQq4kzy2nKftEwCG7MzL5WLYxpFDHsuiFJCuWctcB278AAyt2UCmsEuyYZ",
  "key2": "4q3g8Homjh3aPsxgwPg4pZ7dnySodV88GrGpSbuwyAxQAQwFXpmrBfMh1Weeh6aegqkPtfNpxr4NxSgLizSW3Q6i",
  "key3": "4vYeiAce8GAjjX5wWW342Tc23qhUAfzsbQK9Rtib5TYbUDkMF12R9YkfXTcBhQWNW4d45B4ovdaL7v3DsFuMhdgU",
  "key4": "3FTzZ6mVaCV9i4DgQpMmj7QCkp1CfzMDwSM8W9yK9m6Ch6okQEQNgBpgF9DJrTK4uyLfZbfCLa4gV7wbH2jWNQ9a",
  "key5": "2LQc4gYmtHTRYUNNJXiXyWhd5csbPVLrj7r1CgZ5DGGxN6Z6HnGQd6FY9NHTe8XDWvo73wWbzfVmocPfu5Y7sA9t",
  "key6": "4axRzxdjZn8Zyn596CEtYdVCVA72YARSrzXKrArXx5WcLRJETSJDhuSXBRj15aFKhp65LRrMBoWGXVKNYreSa4vQ",
  "key7": "4SderoTgjSkMgj7SAi9cBiMoxXUSW34SfA3k7cVUeU7r2QVDVnHYKBcUkiLuLNG5MdfTa1NRMLfnU2wqnifqMeem",
  "key8": "3rVfYynTyTf7ENBTPEwfsvwMfPiw887Ti1G6FbXxosLcPSuNK1ckP8fzXsNFNc69fSCerEfTyKQopbUMkYPUwELg",
  "key9": "33zL1PErjfcvSEtAaDTp3vDUEhkvFM8aedvUEaSGHEuvhiiXQPyfHMoqKwuP26ewiYAA31XERtbuy96wjgjyrrkZ",
  "key10": "5svFuiAjZisZGG77zTSVMHNsw3Z1qYHQzSLFx3BJ41N7hpXtcnifTeLLcnwdSbrwJP7nGwMdf7CJmWuzV99STzAn",
  "key11": "4TK98BeoxfMgYvh264GEDoHSMdvgann73aRCmAmQCqJ3W6q2Cy9ZzR3NdHTbNaf7kZGUELJY5mML6FiusWr3EttK",
  "key12": "2b2oL2rJhcm6VfVnGhTv7brhXHzoRGMXyof3qWhAE1oYs7g5L3tEvYGL7QYDx4cX5x6DdCb38jHLusojgQ7pcJWw",
  "key13": "54LanLRA1t5c2cCyzMSiNNbFuPUyfpo52u8mn4zNgwjKpv1fVD8zSh2c7swL4xpNa91qzUNPSHxwm3feNdSgFPtZ",
  "key14": "3XvZbV87xDu2hhR2SdRjKNygG4v5uDj9zNKfmmQ6jSTFDEzXJEPheN3fLHsbspmCMKDEe6uz4HZ4rnSfWbzp9sdY",
  "key15": "wyp82PfdPD5AomPiPT7cdeYMEMridE7pnYtUjXd6bHV9FcKuVnQDxkTrwUnMBFoLLAmsk4DZLgueTGfVPoWg3Rx",
  "key16": "2WB8epEQHxAqoqzFtdUxRwyZWZBJVchPEs52qnuompDgZKTReoZFAucvhZZvt8MtXonujhqCZmPnQWLiJqNKnjvd",
  "key17": "3JJcAFKgYjVi3k4JVHqc2QVoTGJv3og3VA6i3QQaTU9MEprzF4dKkw3Jx27zLi3XSK7299qFqLEdxkeu1yCX5xXs",
  "key18": "321gGDcxN3T29D7HoKjwXavtocP6fmXEmC9vP4TY7E1qxS3r8jsE2c8cYSap3MD9HmcZo9PtEYQFwRjrc8Pz89q7",
  "key19": "bGjGYdxyYJQgkwnSh68dYrH6ZEZeZAgbsK4fDSeEt1yJh69tGoT3ae8ssJPmQZ2iG3FBtawEey5vWR4RcJKnZdo",
  "key20": "3ubMkhGukJjCKyRN6SeFJbVxVAisvVc1beiodiBGCRYSXaELWtjaem4mQ91TjWutFrqprJy82YWW6BTvKUeR2sLz",
  "key21": "5HmDiZnjabkFokFU2Z8eP2vPQdKT8PzKiioJd15sjCDKEKCAJk4dECftsb6Ndtv6wmb6FjXPvhFXQAUnSd3p3Daa",
  "key22": "ZWB5t4NNCgX3yXU3qV98pT6hPfP59XfwjSzsAa3oXtszUuhmwqv1n8ETAPMytDjWptjN7YdevvmSAQR1jB1yYZc",
  "key23": "4S6TD7FNK3BS8AGMTeep5fkWxPb4WP6EB6wi99Fv3p4f9bRW7ceFSXCMWdGqeW2SAuXYDi2LbiLLvQRUT5rgeLbL",
  "key24": "261LYmfUfoqcqHZGDbEcsaoTFVDde6Tk5FWDn9XP8gkb1t7DEQgkCikVF8pXerZZKMN2hgUExoUnJLLGRoQyA4Ak",
  "key25": "3CDGTcor4nXqhRufEondk5Ckgx1o6ghGAPU4dcLEU6Pn2PvXVe55SnXpTywyAnPDZDCZbnbMBvWMGKtArqZasULW",
  "key26": "iC8X2AtPfoYTLrbCahN7C717vwwRyBzzEc7WiyhpMPWowUnKSPNGyu2E6pKktxttbw1QFMKobYv1QfcV8GBESst",
  "key27": "4uavfbgTxPUS8KgeF6FANqnKcPUPMFPEYpwTt4cWCzimhpy4Vnq2fqZ5topFMuXn7SChhCwBjH4zgbhNyqSTNSRv",
  "key28": "4QwuemxuH1ANPCEzHgpHqxqy6FTSnHKmtsjpZZ9gTTQqHGQpPZMN2WEN4f3WP53EbM3MoVXQgeZvLWHnnF6aw5LX",
  "key29": "52fsRGrb5vnZQcH3vcYrhd27aZgg2CTUBVWtshVw6pDpPzCGrcq1TTRh73XNvtn3fTDwthkKKwY2Dyerg9DWzGGt"
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
