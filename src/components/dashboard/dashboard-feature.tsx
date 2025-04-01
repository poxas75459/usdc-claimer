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
    "5wfAcCrmD8AufHCGxKp8jguDJTgAoPMyJ8wD2iTQgxtTountxHsud8zUWtxy6cLHQR2PfNYBvKMSeY5idxYZqC58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51uQtvAXVxuapiU5tL9ieE8uFvCyL1c2kdftcurc3DYCpcnmdW1kFcxxQbEMo6k4EihUBFiZXavxo5BTdysJ4LJk",
  "key1": "BBk8vBsgGT97kmA4meHyHjtu18PM8gr4GbY2akHiYjL5CA84oUJ6DtihdDXa4Y5bkYZ4DqST6MyUqHa1yLbDTCa",
  "key2": "4GxGRDJGagpkVLg46Ghq1WbL8bS1PTWf3kiTjNmaT9K9SDsjQVrmqEu8VPU2JB5EzeA2HEy3gkEUaqbTLcY1SzGM",
  "key3": "gEfAmYtQAFdpPzx2HGJGwVfbhvKuVjtZ6c9GKq2RhthtqftmWkJbhVQJYvbVL6StunrNVGCdXhxAaiRLfLGrprS",
  "key4": "5GJB6fRoiXtPqkdC7Yj1LYGcfx3B1B8PCYhxtfF3oU3yj2RK5biux8wfzdDN85Y6etsENiPg2n8BmU4YHVRbFEtS",
  "key5": "EBZLGXZCptEm2dhJsXB9h5NRe1xX5paujKqrx6r2Qt5NKRwwm21evsk48m1EW1J97g153g9Fi2U1ZUstAEnxQ1c",
  "key6": "33qrDyqQyNRHy5XVnytsxEEfZ1oygFCR6RTCALizhgakJPW8YfoMzUbBxjQCt9yxb2aJHLQyR3pucoDuEFQVVNQd",
  "key7": "3VTtrQ8U56pzLAFwrZDVT3sF7Tm3yqjGwzTm2PN6SUwY9dtNDPikojQLKjJkqzyhitbnaEbCvYBPJQLbnt6wWyzT",
  "key8": "SjoRAm9mdjYq6tZpM8vDV9ZFr1HXQQHVgwQGoVsoJCnSwsFuHrF64q4QkxJ45P2JHDtTiKaWpAFscLhZwJoqzeQ",
  "key9": "3su6zfcQ9zyv9Pew9xMEux4Z58SDfgzfYeGhEqxp1j6sJTeJtQUBfDAzWL33vRykBtpXd47Jog4756eNc9oj4Ber",
  "key10": "t7sXoE2suuGbRRfBbMTuBLe5qQtseAsNS9Db8P8HWU3fmmD9tftCZju4QYSMXDKDUiexWhzixscTjhfVhiK1oPS",
  "key11": "6F3YSJwaDSfhDPpUCfK4a5o9REPUmkkHHygpyAWWykREiVrAFUSi3BKrQvK2nadhgZQUsykGPNUisVjpjjnPktt",
  "key12": "eWBYjNY4LPmjcBpamQ5X8baqZiBsnPrVSFGLaPAYPoT4h3RiZW9AJ9KfzPqULabiMAYQf1TyY7U3Kpmevht9m3K",
  "key13": "4t9wdmVwswnzEvWEMckrrWGD21LVUcJ1Ais2RibMsNxChVhmgHMkZbajS2XBxRdG2CCsCHRrBwSeLqFWP2F6rXtd",
  "key14": "dcicrJzwFRsyGtYwcpZZPEvDB9hizn6Yr32HEcLqXCZApEaaAYqeuNB1Vr3gZGveyyoioVuV9CXEMwnpzWJgUQQ",
  "key15": "3LQTPSWUZjk2EisYTNsCd75XNEF5fe7kiL1KoDBUgzz7HasVDxA4reDwX9sBVFMfRVRGbSPtRBJDPtd6zR3wMo7v",
  "key16": "44evesE2xCeKLhMrhwDCyADqNGYoF3wHptJNi79RBLi2Q1zBjNGqebKSofVPV2sP5rtLQhNfcUcCZAmuu51JphWc",
  "key17": "4Qr22jMbBLYNB9dkHJzMyq2mziMvC9ubHCMmLcDsa9etZo9RuvpkQZDqxjSu6QyMwV2hRiM2rKoKmm1H1RVKeui4",
  "key18": "2ec86DnjJhmpHLsacTF6xYf2E3NfB3BphA5EM2ZmE3vS6BTe2QyuiFgz6DFZKkN4v8dKqUwFMbYyAS7zA796q2pY",
  "key19": "5AHqpWyJK7hXcJ8HjFZKdL8jnhAnbhmZ7FtFoE4r1YJJQRuBxG9KBbTh2DnJCyFgpCqAWnMfe4qNvnWgcfqFRU17",
  "key20": "3o5hVBLj1FXTQdDe7vCFqf3GSWm356x7py6SoZyo5xQCZGqTrUfaHfBeAXG5VWYho7DkZ31t4f8xy4G7WfFdpNTB",
  "key21": "4wMaWJpGgJqdzwGmrcaPn6ggNfeHKLvya5k14JLf6MAQR9wZUUj5USUxRsegWR4ox5C8yE1KP6hqy9iWTjJ2HUns",
  "key22": "4YkdFeumGJYSNi1gsht52RRGBkLKzqvuKord2ELEDJBzXEpfNwJezVFgdPgm7gxiBtBBWVcBDGFvMNpMPzZzTxyF",
  "key23": "2jihaHjJxLVkC6MJq5vRMbjZ9XXWv6jooYS2P2y5MuQUZnQf8KwpmGJy1k5Hx1T4ZXCRTifEzf38ZnzK9GnvdzYr",
  "key24": "gKgizySJ9UXm94gfPud3FLQEA2Erg8KbbhQbJnnZXXSJaQSSh2oKLo7abeSNW2dZkbvf3ehZAVL3fcJckKzAyBf",
  "key25": "4RMGtdjhJo62qWvyZRxBDm3x4FSJaDKk38iJtQGAX2YoiarJJ8ZmcgDhJ5X11sW24VqyF5wtWv9ZPDsWdFCjiaSf",
  "key26": "4fMUam6aac3NXnqfRXaVJZ1PaCDSBp7BwRd9tmxrDxjFMNCythzAcXT5D12KtmfjgdmN86AH7gHd663ZFy1xuc13",
  "key27": "536ba4nvxELDr2apUDoXjjZDRqdBB1D2BTn9p4GgsMSwUegQxbAYmBLvtq53CVJDbSfQbPthnpa6eVUrzFVsxvuf",
  "key28": "4QvDiXYxVdxdt9fDw1NWb1DKerGrqK5C3tA3XAxEw1H4dxPDmbG9jYBPk3YCcBiLSvBN4pb1mBj3mKsPmxCG4UVV",
  "key29": "5873DVZwZV6hjBgDvbKumNb6LT71XMVKj1vdNGfsoF1v6fWdzBo7RnPP1KUpy9A67djogPG3GMd2qoP1kG7nG2K8",
  "key30": "4Jq3nVxyqmUxMa4YHM3eRoqc16GCxw4YEsDNsvixvRkkjCYBp95MesUnRz6VF4581v1eznx42qYPy21XpMcoHH5w"
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
