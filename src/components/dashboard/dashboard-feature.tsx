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
    "3uugTYnFuK4a9mezBanNQRqJqVnbnwfL4CjNCDcJbHhGybdALwYmhRP7LSHzdatqgfWVwepPdqtt6kFh3iwBKaAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xyeef1828FX7tiFoWG11ETrLwctx5LqPLTHukjM51R7P3ZwmjNDTAh3ehMtj5U3e2EnTcX3faQyXn2ctJrFHVsL",
  "key1": "24VtbfSP8DeoD2asdih2NWU6UPgjtuF6bdrxBD2K3jUfTjN91YuBaf2rx5yDka5bKmHRRDw3P3TTPrBFrbqPn9Gk",
  "key2": "3cebsJuBtVRcnnVafmwr4i3osTEmX3Y2UCnMwpLbDu4A81HLTbqpEiRRLaB4hbEJG84VeXVYc6bYFjSAkDS6cGLp",
  "key3": "5DwCYgoNqJ7B1P5gwDFEnU1ewALX5LX9LmsJgx3X4PpKi1SjDPW162s82vBn6SyhPBwpCXmYsicu8qJdUM1mTzYk",
  "key4": "5JJDdxPmZ1N5NhiTxe7EYjrzVJULdBLcNFNBdiv9n7VGn5XZEN1Z8QV7MFAekP6w8TDaVPnaCgk16DZb6oZyM4ea",
  "key5": "3ij9EEgKZn35xW5yWW88k3FZM6WpWS5USEqna1GS3qhweWvvDHALK5ipd7aBJhXMNC5AxQNdaqk71vTkvqotabyD",
  "key6": "3twqs45Zu9U1mwWWU941u3nbVHC9xjuoPKKYcKi8111fzuU4tzB4AQG5qVMiwM3iJ1hmiGdE2QmUt1mUyVAHgg1z",
  "key7": "2gK841n4rqtgkEaKrFAuZB5JDGiAcNTWXYJKHATDea4oDmbAZJUNr2PdUiJ9594QeNjrxf52t1ag8eTiWoDKhb9B",
  "key8": "5DPN5nyPpaEMA5SB14wPxs7qamo86nTiapMTsihmCvYp33J5gecB9bowaJyWF8CymTNH1tqbGao7nmYvcuVnE9mN",
  "key9": "5uA55rzx2LMXGbAz6CLqf1iboTrmrh4iRSDp4srUxnyWB5gWEgxbJGfSnc8Bs2EDsH6k8z21WSAfo8LCLCbUWePc",
  "key10": "UuNmRaVXuLvR27Xk9xBLWzRu7rsZLP8EhY4tZ2rsWsxFrvaynWYowB9879PJYK7e6Af2fSov6GjVAz5iArviQEr",
  "key11": "x8g1rXA6FmR6gkse8kyUVYdvyuo7B86j493rofDs8bWFdiwzkWsuANZSiBS9rYGGiMXrDrJx72fhRitZSHms1x7",
  "key12": "4aLzCKM1jqqYsKtWhFPwHDjQ3ej95LkyTrGFG6xjxfu8SxATyGnAn7vV6CDx5WRc4qma37yjACXhrq1oLRmXUv5Z",
  "key13": "4aKKtwm2CyKeBKMz1ztfwdQMjvHNorHYrmr7y5DzvwhTuhtTzyJozBHzRDkWi9qPJevjdaLTGXUMwt3A5RyQNNeA",
  "key14": "3y84iutAUvjYuHAnL8qDdpu6kuRRGHUftEVawrHkxohdzMRFToJgV9zA8sqDJ93NxdqWZVHx6qdCPBsZ72ZFhJMW",
  "key15": "4qcSD2VYeanaq4zcQeFi7zHDKaKQR3W6M5GdxxjxQKHsC3TDHs73CmYzZz2UU44EKqereqtWEEUSsnibocYtuyAu",
  "key16": "2vygWHvJ7JPxTHdWEhRkgDg3dsFQ499Qg22VQw3XJRFKRHg9mcf4UxWQNWP87FHgW1ouvRUQAwRpmkNuvYTj8sAE",
  "key17": "473puDysWeBABdbqunHNv4uzSTJdyFLt5Cdyazp2CvkkM2Miaatzwu1gHQ8rKrAR72rNybXSu9Pgu9p3B3gM6Vxz",
  "key18": "2pms2bDHYdc6kNYGuBctu7JYx6HMZYJBNvM3J5keZpAbE4gWuLVkbNboXn8Fw8x39AbwJtdEMDQ5GgJzWBBJ24y1",
  "key19": "3d2K5DDKwnrDK4KQJa63wiCN1jHjmjdU5ifdoU2ucQSZb5tcjXH33tgZrFdFZW7LXMsg6JkciQHmd9GiZCqxpet2",
  "key20": "4196pTK3hKr7s9pQ6wPDrMAvk7KvS9w6sFrBc95mbvjqtfz4jc3KNtj3WAWjT8scAJXafoFmXoYL2TDaTPSXLdV6",
  "key21": "2Dcxa8QZe3fzHsqVrjxWWfWvF7twBQdhr71nTycRZ8fEYxD9dv7vhcGS2YWGV9hjZoBR19epPTRtbhVHbyVAx2Do",
  "key22": "5oN1gusipTdWc9Arg88bbM9j9ahHpgSq6xsknhFsyP34hVFJjx2dZ3juKY8y6ZBBAY1bD6JwerEPcR9kvDB8qzKw",
  "key23": "2TgubSrMd2GXmy69iPtwxNn6H1GVxYw9xhKYEJvGMRUfjEeFjZ16MUVkbJW5utvrKkQP7vT8WvbhrN7PeCn9VSJu",
  "key24": "5F8TLN9cTMw8CKdGhQ7V2kEKiZSHjamBE5oPXDbNgGJMhfGDrCm7zWmhizB1jCnDJ9D6Acjgn9B67Jutd5uAgnNn"
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
