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
    "PjmjquidEWT2iDUZipX8q5oApkZr8uvHSEm1F1k7dJYbUiTMWZM2iiVGXLhwcAfdwEKKyjKd6LAaPViVThmeyt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p96UweQphkLbQUdMRk9DyXrwweXRApiGNjoQ3RZRmuUTTmvTTD3VUbqXMkVUXEt4Rb8Xx4kZBEcpdESW66sjzgh",
  "key1": "36L88kLrcbTisgMxxqVA2vbRNaAGZr2JHQuubh7YvNifxsvw8ef9byttMvJ5ZNsPa7auty7toq9KRhows8yoF7wB",
  "key2": "nYBPkmvBEkJoWZDALriEQLU8xTSMMDwPeyv3yMDTR8PgVwZehcjCi3nPYnG3zXQZiCq3G8dmbTBi5wZJqxuTF63",
  "key3": "5JnFns35RePUPRbzEFMpuAb6pB9yzJm5xJAamxENKKdqN3aVmnm4aivMmd8Y6Cvn9Mys6inMz63sREWgvVuHZvRW",
  "key4": "FfLRiEaNewrJhgVi2gLEmLEP6ycyccdPfeNkrmLWMopHKvKvQg325AJVQYJkjAtjKFR1pHWN8pbfYcbYZwRYqpo",
  "key5": "2nVrJY12hszZJY6tEwu6Fs8TMtB8h2oeuDZHgXTNRggxhTw4pK5cNKYbAWQKdfw2EPzc11VGU2sNjMr5Up7fsgb4",
  "key6": "3JKT4w2QKJ2HtMUSN2KSVdMHFE969Y3SopdpqryjZF4YKbSjzeKKU3MSXUPzFKVeSSbkYre3PWb6MwuLKzHokQvd",
  "key7": "5kyMiVJ9mKd1DYv6WquzjLiw79mHZV7QmKavrhz5sJsRg3VExZQ9M9Bx7aLnVQwcnsAuFUGkroSk3zqQgTx6jS1s",
  "key8": "43V8QmVLqnRVB2MSKAoUBpiQUTYw2yu3ch5NsWa2tEjFb4H8FjKwBRCYcyc2szWa5vetYh1FvGAF236XmnXopphc",
  "key9": "sRrokEEPgwpbZUaRAoPSfLrwGYkrobfVCuiwaViF2BGjSXtZSCEczyJWghC6EMe1S6Rn2dMnxpf2JyWwpJ86bJ3",
  "key10": "52ryqhrTFV8N2nneLFWh5Hsbm8LdQSVgudkdAVwK73ZzPgi2tUhenBBXVubBZt7A1HVz8zSr9fNybs19wvCRWAcF",
  "key11": "5oPggMTfCJVA54LRrpUyDRcnW6fv51anNUtLC9sF7Lc1LzaXFHuK9H32oZkCM8mE8gBSPm5K6ejfSym1RVpRf1nc",
  "key12": "5ZzVmKd64rfU9HLuU5QhBB3zu9iEHrnBz4zi1LYoBxP2fwHDQZ66ZkHHPE8Tspk8FkkbdwGqRSp8KNE4ZGZK41SP",
  "key13": "2uf5cgkhWEZkg4CDyZdZ7ZhgFYMu6Grt3QHi2yGg8X8vVfGkZdBLHA1xaiJp8TPHMMKyMYqy5ma4vtPy5TvDUUaQ",
  "key14": "5XUDkCfxHRX3jqqZH1rVheGoGxE2av7DABULthLnDNKdqSfHQW91eJoLW9ywqSUWTjTZw7wFWwCCieTGKpL9EnRi",
  "key15": "3xpemu3hVxeUmRKuojzKiLH4EBDXkM8mHZ98kBA8YFpSk8HudpAm2MeDm46andDR2UjyQeXuMme14FMXs5u1YoXc",
  "key16": "3LtjNYidC6WHdWcL4pa8uhkSrWTsuZWo4KufGVcKgVMUYvCatEcj4edee7xWz933bSRkudarTxyPH5fawWt64TPu",
  "key17": "2s8zKETGU8DRwAuiE9k9iyHpoXsqioc1rX6p3zEGx6732gXTxoe7CNuoJQNKop9CgFwnd3uxuYt9poZaB9LYjgY6",
  "key18": "eQSboKWtugqycccFyBrMSEYNANfY1PPUFmyeFHRJLdTqc64RuDmZAiShBQWWQu5YCgLEF7xB4vVehgoX7GwZS2f",
  "key19": "4B9xtMh6NiLyw52QASWRa5TR1CpnsvK7hqTtdYTA1d1KSLUQpoDCKDRMpoACtq9HPRMdRHXBrZQotr31YChoLbu1",
  "key20": "vbd5EeBzFK9ETiPxvpkzyQKe4fiAKPY2fqx934MGwvuHVUJYg26KusEUFQVgGwdqT3KwxPc7UUC5Djg5CSYFrgB",
  "key21": "6q7YNhR85naQdztX3SbaL1fYysf6VurHp2JmdLYXWFhgC25yC5wC6PP1EHpCa7NXNcgn11Xy4Q6EEs3hHMVcVYw",
  "key22": "URkQovWwQWrZzp39Zzxba84e91eqQCkGfxvoewcmtiRonmCESVckNTmTU5StiznGwtd5qTeXJqGjsMhTwmtFycK",
  "key23": "2wgjkGX2M65R7kQEPy2cDjk8ah5eH1Rd7EXF5QTDvj9smux1DG5ogw1K9y8DPxzA4agXe7uuajBMzmn7gpctakjc",
  "key24": "2k9LPB5xDwvSWHyd9jTKkYmdX274oT5mqaqQz7FJS9Bd97tbHKiw1Dqq7feiiwySQhw4vbijtKzr3s3sJCs5gNjG",
  "key25": "3wr68srVSr9ipuit8mdBoecoj2MuYbxyECEPNYhABHjgDeJYeARLRFHE4yG4tXR1EuRkE3Kj1p3M7zwr3BSBDBB3",
  "key26": "bqar1EBx4mNZfSRot5padBmnk8kT8GVgiPRMgz8DGsY6pfhd8YdJazgqpoFXgq5otywT3w5CW7afTxAbHfr7tio",
  "key27": "3BLFBcHmbsXKEsSQKWJgC6vQHcrknYoWkM89jYRmmWXF38MqSh94wvECY4w6AYPkDhiBVcGKFbzKX3jiQ5Hp6G3J",
  "key28": "jg4fGaxi3X3xLJ9awNCParKkYnELvd8dHg34y5EJptPHvRKXdNVrTTNATrMhFrey1GU7ACBJDYBtbqKX2mwyPUy",
  "key29": "4SanqEVx8ZwRTnDwunTNtpcg6fFtx59C9Wbb6QLYsmRY2vZakZEQYNBEAdZonV95PsPcSrKnbJfvu6L153CHztof"
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
