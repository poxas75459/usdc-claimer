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
    "sVEgbFfDYk3pNdzTM6SeStRPC9LfCz7fx4pFnk3BwJ4u1epEZkGESauC94zrGcZLiUagLrz8oQunbYYzeT6uzwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JnRuTSrGVM1Et5xn8Drf2NTensz2T8tkpoMKgQM11Xy5JjrRpN9BFXtfcA6j7L3e9QbscnFxn6HdW98gwBy2vr4",
  "key1": "5RHuTpipc4YBPs53qLXHAFR8mcHdvfsvXVtjLAphKZMbF2jyjzAdxCZb7r5D6FrM9RGTjKnKikZZQU2zGqjm3JyY",
  "key2": "Sd2egPDr7gAcekKJPw8HLEtuQfHXkmWoA99kxoxKZGjiYpV2f2951S7W5GeGJG3Y5Wq3pM9PduMJwZXQh9jFbTj",
  "key3": "5Po37gtyjiaYu1e6C5tc3DRBNniPAreJubivYtJARfxxcrSenCuQw5WLKwBQvreufaTsiymfgXjJZPrarXgZfSNi",
  "key4": "hiBP2JSNw9EqRz6du47AB5EC8M3QRuLSzsnLoiJUf3G8NQRSDir6V7MyF33JnSMpiMFKb5pjyxFcfF5UgevKU6Z",
  "key5": "NaCFpdLaMPiickBrB4jX5zyExEGA4bz24p29yhWU7VGLEXg8jMCHpuhdc9CLChUDpGTXuY99z5UpHXj7AADMGaK",
  "key6": "22WBfdUxoXE1CxGcMP2T8hAwzEmaFEFxz4uUL2YXkXjAiz7C6zd8auF1cVacDmRiPWzBX6c33ravCgsYTNi5HWny",
  "key7": "2k8YPqxQUw4945TwmWTbH8eR2fZHrrqPJXA5UH3FwP6yJhjXTtoPfC9fcXmbAfkEHeeZUsWUpLo959YBJQuKjig3",
  "key8": "geDSR2JKdxskYz5FPaNmuesvJ6yYdsNTNPrZUx5UvCypWbaytfZZwMzzyNpCmtzLfoHZdXwBMuXw2eFELVwFkUG",
  "key9": "5RZykNpFYU4NEZPnW53Wv6N1CbYZPqbHzGAuqwxz9wDG6Tq9quDMRshNo4o5wSaWKpMAcHmjARE8XdLUB1ov2RXt",
  "key10": "joavtxMW5GTJqGyRPRFQdiaFcXQtufMivByXNs9Cyrd4bvVj1Nk9LXYjT8PnrkpwtQinar2JA4ZvYJqJiKpxd83",
  "key11": "4hwgxVZHKfZLwCKLQuDcEkEmN2T6vhBcdPGE4EVSPEJnsWc32HHWhFgZmSxvf5KPUEAN89B3LGVD4AYLsPRehMZy",
  "key12": "3otxtY5mdd7qbwsMYqZ6b1uNCSs4obJ2BeTsaU4mVKMMoAF8zuqdMXDydsHcPVgyHjcFjhcSZwmaGf3QAGe2eYiT",
  "key13": "3UrniKxpvLiYE5vDWQieYdUmgDScqETYTg2fTAQGE7nkrS8q23P4HxNGKBD8AMPBQ2Ue77yqtEoRLGVp1FCHdt2J",
  "key14": "3irbTzpavVsZXpVHqWvknLP19Gix8B3XDz6ibR1cfToCnuDSk5DxUcEyS1DXq8frV7PmEKsXQMhohG4hQ59UphKR",
  "key15": "4cXHFMoqgepKowEHkHUNH5HUE54S3gJM56bk3TffcvJS1kyJe3LH39NQ389ikWhGKRbeXAnVeZubqFHBMg5N6y98",
  "key16": "4wov9nhh9apPcSjFPzBLhVVx6FCz2Uh8f8z1qPkztiHbqp1Viz5zVsrP2Tpq2Mu4gZJ315JAY1aGK6XRcHBQ28gw",
  "key17": "2Qwmhfs5iBoRCLRmLTRRf3V9ZZ6TWV5FoB4e41xKjouRxmZfgK8grbdhKP9v5RLLejuD9fBize9PTeTbpk7ChkJW",
  "key18": "5TUdbyWVdxmks4WBu1bNMWAZMkqY19moVqZS9CHRZ8PQxWZu1ArTxERpv8C1UC6cHhKzTFCEKzumaD8DdUTguERK",
  "key19": "5gtqRsRuAFodfutXvtBn2N17fDZUZZCunaDiLY12MzpEwKzjCi3NzFqmvE9pk6Eeo8yCKyLs9mPvtJ5rkRh1q9P6",
  "key20": "hnW4dTNXjSfqtve58QLz5bHjspUFmNMiCBFqsJz1t2kpXHHPLaY9VjixJcUyfPUGz5e5Mn4vbJfJr27PhD8jdFg",
  "key21": "hEdHVnzQddsP4SHtn45y2cs48vhu1QzvpmKiS5D111pmFrnUkhfTez6fMP6FExDNCKKdivJSM88NjNfg2d3g5DL",
  "key22": "wkt2yypqUXTPAEZbyxNgZmRNWGFpgyfGSUyCAisPhJq7v5m1ogZqQqcTg5UJDkF1j4mLKaEQuoWBsWzJqxTHfhs",
  "key23": "XeFG8D2uk5NqYRXRsp8q5WXAM3fMNN4Fto79rHcDiusE9NoTAbyYNx6Z7Ek9h14tR4dQwgG9P1BL6rNeGPzBumd",
  "key24": "5bnXmh6XGpfrky7yejeZcKaW45owvBjJJfdZ3w1VNBiqJSCurXmdqJLHcdiumKmVs3bo98CUzCt1b1TeGDLgEHZ3",
  "key25": "51UWwDTqgXLdovbjEpmsNArQ2B6TcGkfArE7vHLiQ5nagXRG54bL2nbxWw86duF3MvwXiSZq2yn4fMjfjxSKGSfn",
  "key26": "3EuY3FHoL8XwCHxrPYwoVSoCmTbik6DAucwraU7L97iPr6foWicsoQ1QXzbm2ncPeTSu2KjQkQCv2VkuUc8xcm3u",
  "key27": "5oyEXZSKsFifJfhCpCVHWNBExQv77F7gLkT6KTRJnskwFxayk5zqz5QVC6kRZseBhi3zWBSyr56Ha7Pzh77VqQZy",
  "key28": "3zL3FdqxPh8MEtB53estq48fATbyAWiB4NXaFXZK8NvGD2QFRC6DEyGBd96d24Pe8KQm1dcTc89BZRq8J6nUnHhj",
  "key29": "4iSnSN2GpSvm8k7KvusURMLwaNL14dsy2pGZhoLkWsE6YYXabS9Z4nvLscBbrCqtB8xd1bgFcQkKEtGCtecf37Ky",
  "key30": "4KR9vyyHY3amjQmJJVtWxmhWyxW8Qh79MrCWQP2jdkYkp5Zc8vpgeQEQew821DUMbFuCjdaBwAFKDXJPtqgaYf6T",
  "key31": "2oUw9fdiWBQwkxWRfXa43YFfyAQBMyr5GEDcgJNxzdGTzuJum9KBMeaaQsLM91FzQw5kxDgU9zb2nVMXwHutZZzM"
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
