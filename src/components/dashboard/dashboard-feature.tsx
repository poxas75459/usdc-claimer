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
    "27BqLocWrxbP9mLKTpH6aCpH54zinjzq4uD2i4Bi2L9SQ3TxLNeaK2YFn1nxdvyDUmfKfA36roE34zSRojbynR3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pD62NrKfH6MCeSywZnw9HqQCXUFhSy11GqfXu3mNF1utb52udph5BETnRJRnBBb2SmbtYondiuuHuzZ1Kyg3376",
  "key1": "sfn1PwwAC4dPDMj14pvCAHrW3nPjRi2Gcmo4d7XKgH9Xn3D9GxTZVyeaPwab24e2MdqBwqnKaKb1ByqgVNKviuP",
  "key2": "2LDHAhHQcqZAeLjeF3TqqJnpMjDbF2BofjaFxaDSzg9HFp5gviUZtmSc5S5MFTXqfFkRP2NXd1ba1zkoYHo1ymGg",
  "key3": "5G7JBHVu9EvBdDTkDqEGgLmPSW11noQHo2fhMnq2v6bjhH1oBNfDJ5dGBpAmoUXQLEXbyLkTjaoFnzw6iP9ndmtd",
  "key4": "3BuU2SnAELEm4XiMZeRnnxqT6juT4KfvVjPWL3Bi57w7BnkUHoAGuHBLDUmfXhAe8d6RhK2BYAW6gTDCCr7YN6Cr",
  "key5": "2Qo5ePRQSJCuF8Sx1FDxR4vspCYGaayCci14M2EG9xgUc8u3bMhp4JWLuSLE73gHZHy3GDZDwxg5DbYHkAJpsh7a",
  "key6": "5c5Z5XZUnEyJm13aiS8iDPAKjCJWKVdJNegi22CJUtgebH7ptYwURGUgXJC2qWByKM2Ka22wAHm28kobEAoimWtr",
  "key7": "5EfmYXzGvDix4zcKNhgNMFYniR7vxtR5EzYsZAFENo8NsjsAYCtUZbVSLcEi8PjLxVRog5LX4Mjc2ri3Duw6gvLy",
  "key8": "2kj6GQytnv5juxqUC6c1Luk7iHDBBibC83xSNkLPvcKJYzmF3Rxc4GQSUk4BSQKnfQnryAiZbDEtYx4JSwbsypFk",
  "key9": "48bpJ7vKG9AhoRodepM32wLrTG7uGgKsHcZ29Q17PhJDr6j7AoLfymrzdwULDuo4GKSQ7QbAFgyAEQVrDkUCYPAo",
  "key10": "3cXfMffvrxdbEwRFwkrk4Y3JeVAKoEd1KyoRJfE7kcDD6NmwEip8SgrEy63yP6b2Kbh5Ko2rtsNCzX7tE9ur6iov",
  "key11": "3BTF6XniNabvvB5WsdFesvLNgA9thkqpUDSsxAgpXEATgDoFDSJPb1y3FA4XJBe6fmRkA1F2oKs3u8P9wrMmwWd9",
  "key12": "2zQkgA978Uc87squ53FUoUc3dV7XjjzJWmaH2TFi621x94sWkniTH7xnBWKQAVauph2sHan8KucQ3ya2Cdz7y5qg",
  "key13": "2C7nX5Ys4zwEpwyeXkXrFWJNN4CmTGQf3e3XR2AhZCSep8B6SzJb7f7Ntv6d92jH7Jb18hm9is3yFR38SirjMaQp",
  "key14": "3cCMFMPvNNsfKbn8rHwNJin8YX9Yk58FUH9HRj8MP7DXUyKfQTYeMMx4NEqjdv5n5oAUF33hYEFgzXYN8QyKowmj",
  "key15": "3CYuxMcgQUNHv4PvNmFBqqqH9xrwcfCAwDSoqtFrNEeJ8T4rcAeHuZjjHbnD232E6Qvc4prQqRjMSyiW7PCKSD4r",
  "key16": "2AY7QoaQxf2qSkuSBGqqhEs81Vs6cWqvKxgg8yhV2i9mFWvNRJWxMWuJkSpPVMzVbvFUhhG9HTUCHBLfrHTMKrDx",
  "key17": "2sAEym1zWnjkLkfJxoEstWbgtbfSnfTTn6C6nuz8x2a5uqNAscKGZJmQcw2qbCssniimdk3L951QvvqBFnMZ3zs4",
  "key18": "31qsRyVYFLBV3kmNEYRb4K23RUQfhZGuZ5MARspypZ7DcCCESBrMXShBVE4q41qmPfjWUQ8crVEgpYYmryDFgcZP",
  "key19": "264cmg2sjYpbDz5xpVbyjCAriXogRhWTeZp87RyzLv43sMnN3arM3og3o7bVmceR1q9v1W1NdQuiQz1hECcpNnaL",
  "key20": "5MAwhW7up7katXV2aUCb15UFvtFZdNhL36MUuKVxoKLN8zds389B3h4dWM1Yz2TAcWx4oWBUcr2HrBcSqEAK8f8Z",
  "key21": "4vgWvHdB2if69nHdAAW1wsYHjaDAjFrsZ1oWhNx8QEzwkU4ux7LK3DGaYLRWFjL33Hi1xbw6UgyvEk2i53vWYLTn",
  "key22": "2vsS1pVf7yBB8Hef9sKhRDbvSy7dZVKt3iWQxoYm8fivx72xDEdhBqAVYfeK4AjSqYsvBDbjWHXfRsJwY6yz6des",
  "key23": "mv25CEeqWcsYKFMohTaQDR2KbdqKBTHy9k3V1M1pQsuBLTKStwrFsgYDfUvUnyghT18fn37TbHnUT626Et8Exnr",
  "key24": "3JwcimbDL1mTcHQuYCfe3makMNSNcBmHJVKdCPt8A4jef1tw24Z3xdDE99XUFLuBhsUUE7utF6g835bGKiEYkxfj"
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
