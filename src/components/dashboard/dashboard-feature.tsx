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
    "7rKHK6t5U639xFCkUuYYxars3n1qkFXYtECg6BdTzoRCaQL6KMNGKQaAWvj5ndvEPTEs5vBgPCEMxncYe6ukmHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YVx96T9jKqkpeBcLmbVSi846TjBGTrh6vbQqTBPrNox4DXKfee1JzJVCZCJxzKYMuvEXBYuc4TGyCYGVkQwwNMM",
  "key1": "2oZJBFUNsDB8hSkgPZJvmJFXU99SGM5dbk43aSNgutX4rk5ALVYBrG6Q3JcAYoavaiJjMwj6uRmJz5znJNpthsa9",
  "key2": "3f4P8rJqfbfJ5t6EYvyD65jmPu97yMJk3N3mTpapEuBeycUSB7DmJ31Pw6wBEqFKckSxVskMctRRw9x7wwC164ft",
  "key3": "4hGfHCnvhFNucAb4oTgZ4p5DYvxyEYcoTiqbKF2mDqf8cehGqM26az3C5owgAz9ozyn1CbnbK96gf9HHBgnWwQdb",
  "key4": "4v4YnokCrRgqmGV8vLhakurUYMPSEVKfDTBBcsCUJBBWfxCWT51hj5bBGGzLa9iw77hxH6dkPfP951ZgzMipbbof",
  "key5": "sTs5ACHyRr4ftXdKvR8uwfTdjp2gLmVDcX6UZCWhGDCdedaTSx9ZTjPZTCuUR82E8fBBaPLTrLMwehgrF8XBYKC",
  "key6": "4kQ75JNm9Z3SPbkFem2rhqPa9EsM7piHWAgkEsvAzXPvpRt7AYcaSXyMW4wRKPbpHbcxjJBo5KZkX4EUSZvL9FrF",
  "key7": "24gS8XYgd5Cg27CLFNTmC9Cx74Emuprw2kbGpomKsbXDemBDBnhJtNxy2gws73ByEEAVXccyL2aqrwBPycSzQwCt",
  "key8": "2Y3k22zrXBoXSVsDiY9sPm9TjXnT1Vv836fsYEm9oRKufrheWJ62YW3zCukexbvudM5aXmd3saxuFdNVCQpURw9y",
  "key9": "Wbp54XGtzFFkiYdxtL1FvJ2HDh7BCkJjxjdQ5YVro3y9s2GMzCTH3yB8Gy9GKaKxVZ3vF1VJ3Nr3o1bdnuCG6Re",
  "key10": "2Q68D7BKtG2PEjfuLCAr1pEqMFaryFhECCkf47PUCQJdDLncCuBW5x8DVAFkiXsawo3cvygzXTT3aK4mNo3HPDga",
  "key11": "3t3K83WnsLZY3V93Jv4aKoE9fK31uRMRKujv2tKmTVWPBauoARKMERqu8ibxtxAJB42xXch2s4HqgvBVavmvu9bs",
  "key12": "2rMDNWBPyzAqp58iTC77zNPznjpCL4M18LEyTV23Niyq5Axu3mnkXQs8y93z7qtqDEMVrb7bur9jziXhkBu3XHWW",
  "key13": "4cCnbJzVtQjpnJpdeUV2PRnANKS9wUDLR6ixdSStad7BpBjhGZ4xe1Ke6cpLpCa2HdeXSL3XjdEXHLr8YjztiwPF",
  "key14": "eEoZrBDwGaL4LsT7hZtjAWMywWEUUGTbcqWva2naF7KkNk81CJvtc6JH5mLupxQEPaiUvDaqFQwpGfbyjDiuS35",
  "key15": "56qjp2pHpXL1qZXTLVNhSVwddbm97g9pWGiJUs1iMEnEkQ44DU3ERoMs1Vpyk1ph2W2GgvFd1DCHrmyfNp3kzRy1",
  "key16": "21bbfmkVCizKD5djSS7t6AMFZXTFUpx5kvhNGqahkf7GoKfMnhurUmiYEpaitsvq6JLtu9NDtzQFgD7HZAGDVKoj",
  "key17": "uFNGWCkZUn79wCDAt5w1shpzzndpqgzRAcCGGvfJ9ptG79zemRXnhdH6tRLe4KnK1vZGbJRczuY45dcX8xoabQr",
  "key18": "48d1YkLL8mo8PYeFtggZCji2CA5FRRsY9Nu2n5XSMMmvZg8zDg79oguNTPec6cKvJXaYKidPvBy9x2LsgBbFEq6W",
  "key19": "4EQ1pzgdcazuJVx4KoAR2556cuLeqjo1MVkSdB2X7gpgxPRU37L7rueZna6DmnRzcVDDx7iB5U6zK3qxetnNTTZL",
  "key20": "4hoJeYdChb99hZkqbRhhAd2tjS8kzgJisAyaNdSpBNd7NwiS2fzdDRPBnkcsR5F5HGHsWsEMSnUvcADTsKBdqR1g",
  "key21": "561Wfp1wd8DdC2taAi4fZLELgeMHHdH18q717GUMPYVhKHuDH9h2yyXHe63LB5zLP2yRwSFf3r1Hj5ehgGPfgCEA",
  "key22": "58hfTyJ3h3prMXsT6XqaZpbJFCXw6Euu4MkG8bzZwUWtML1p9BLqCHhsEFevgN7sUGE9CBMYLQR5zJ38Jf6qvZ1R",
  "key23": "2Vkps6ppX2WmjDxqhwpMXJyE9up3buL5r4a3BWiEVTpakntxqu8m9sYAkoemmhsWM1MeuEyW8nuwNVCHkX7pc4Ho",
  "key24": "5C6TRCwQbjEw1KCaG54ehS5x57HT4uXCNoDWRCfJ4h9my9S91MPcodUnZSw7d2cm8eCbsgC2XKB7aVeDaU2jNrKL",
  "key25": "vfoZKvxVjp8grxLt1bPA23W1AKrgPpzyGJYfAjoToqTPyEJe8ST69X9n4x165D3N5u9t93VNgocwmXDSyyY9FJy",
  "key26": "4i3eYri2K72YbG88k9gL9wpGzwXrcLGRCgA7CjUsxHMKxTyHvAgEYxCFmCT1J7YtfradKjeACjPEYvnMYZYLz5yD",
  "key27": "4mp4QE751oHgsfNFnk6eGPa4PRjKkd8U3fAcHGeeghmGbsjAet6wJnGYSfxwiFCVDUpvRfjEUag8UQbbsosZzSMf",
  "key28": "5mQkNYMRZz9CQJhUeqLTnahazwqR85xxWzSbGeGLouXqePhkoLyPuxbS2GxsPCLuYma8ePfpSyjzv5S9wNMyZ6y2",
  "key29": "39uxTfaE6oATAPwGNMFAhNMY8UXptSydU86fZPeRn2DiM4nnPVmxB7AwfGzvjwZx6kvCHrGKEZvTpn1XfHRSSrof",
  "key30": "2SZLuTKrkDC75dLorPzabbexdWPZxYSXefxXUUjDC8Qw7G7EPX6UBwDQ3cWoqiQTUK1ph7zDaSv57xfpkn7BNC92",
  "key31": "3n1f2qDLihRXGn4NMh9sPYvi8Lzt4Wrnrb9Cv5THvah2SoHoVrtoWrBuTS5MRmuT1Us5TCMmW3xSZGSsji7vq6QX",
  "key32": "5CRhmv2fhzeMuW4Ydqe5vNWwUxMNeVKrymptuRxoeYWW5Fd3WKiLf4fTfbCBcTUYVvWeqDn5T5WJj41LYmhcjMmG",
  "key33": "4gRLxFS9B3wBfL7vix4zcXFYpfg6QD2BUafe2QuJ2ByDHrMcNk7hh5Nq8hkcNNofTUuVe2Tw6mDrhQCMkBVdEGrP",
  "key34": "4Nho3zNoX2JMbZzfXLzLhnmANpKKXV4sJoYbWXPqwS6E1dMXo5zuJNLfwQLheL7Nbu4WgReHBDYYKcP4gm5qrERW"
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
