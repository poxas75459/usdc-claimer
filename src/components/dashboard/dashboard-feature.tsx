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
    "YbL24hQW8mPce6NJoK2BHGrwYXGhjHUVTgPCm6J6SnvRFrZyDHSBcJP1NdC5gHsFBCZuSsmRyXmibxMrZFN3nJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CKUe5wY4u1cabqtjuiV2ArX64XphKiqYoRjBoREiW6vppFZ3CFtnFrce1h1K9GZ7M98trHMgoLFsUm2X1kqytQc",
  "key1": "5Vfvfm7WQS9Kc1ZzZqjM9tS6Qt6ps7FmTapp6ZfzBDiDWKgnW7HPG2gJrp5PmuzLBUeNRcSb2FwzUeTWrbYAeeZM",
  "key2": "8Y87qCunTWfxKcDwVawCFGREioBnPXjCZKETAojhAEzQ3up6wUAuvVAHkVTLpAsTTMV3Nx6P8mG7ZhSfYnbYwxp",
  "key3": "3wX4HxN2hNEKfWE8MHS35Rp3BEXGecPPEDaFBwMzjjAHpmLcrufa4nyJ1KFe9iQDEffeDE9UyQjBQTj79CfJ4t5X",
  "key4": "2rx3ZrNyRzrp9WCnj5ZVjdGKo9xYr3uRrEwdRnSVG3CkVAWoomiA8sWixcy1wTjqEVSEuCpCEA4UFKWiEq4GjY4W",
  "key5": "4HvsazRVzV4RRZzaxsqGRTaCYQSDAFnD1oxdxaA5B6SWp5GDEMyjLhuoYRQGFDneUJqCR8sTLB82YVp781E6mcBx",
  "key6": "iLAUATJEiWBD2YKZT1PxvQuF3cwThg9tSWb36A9GqgMtYz6MwCvu6e8BL9B5xig3Qmje1KhNZzBXsnnAb3vH8G2",
  "key7": "3Naj7V2e6jdV2RZJ7XP8GMrZzg63FzZwtDQXYwLvQEYeo29ByzhrZD5M17oat3GbGaDhfqZdxPAe1ogptXch1qD3",
  "key8": "2xD8iaVZN82SooyoP4upb8qiC64zucTJPs54jRtJiNQdPRPaxczEeBcf7SWbnsH3uq7NBFGXXuVkfwqV6fggZUTJ",
  "key9": "2nELMwhvhAxvSjdL5fWg98QMxfDXVkgN8B33qVmzkwAbs5SjeFcfwtoCpAZiaKAZnUUZRmGnXpcxzFeEbwoZaLtW",
  "key10": "61ruY5LXffqtTmHUdo4mLT7FswDDSteeKHAuLBMJUdBwnaKNKWemuoCJVKKvMMCyEgp2WmPWhFwtynGD52uSiGKA",
  "key11": "4YVDDu6ThyyQXyxTkm5fKuHvNsFA5Qbu6rMJ5cxfbCCa1P6x3eE5AGi5buTABGTuCCmDr1rMgkpkoVcJrem3uL7d",
  "key12": "21WawFbPB7qBmqnq586bcdPqTwAesJew1rnPAxxTpF4XzBkutcry95psYD4HmqChCG7gKRJs4yp6S6hbTJ7Eevv5",
  "key13": "5NJ5SBwxno6YQgv5vi4JuYN5QXehKDDR39rkbDbvED7EFtMfbecaaNYf4ANhVMohuGGdoznp3txHrE6ho7zhSBXU",
  "key14": "7od88A1EDRUN1SesS4z22cnLE66DAMdGfVJS3PRu6uKRkvwAWejSg4NCADXdkB1pCTgQExeSpBch5ggLwQ8R8EY",
  "key15": "3nZa527NtaMCCJ354GV7fYRgd5LXynisFLvrn1UESuZ44mxxrNFBgAGEuaf3RSmrZxCxmKo28LQthaGFaxoTu3Hk",
  "key16": "2kUbQX6sajFTawrnpAC8fiPVW9TxkUiMjvSBH34ZwyfRDdXNxGRFPK8qmts2psxoQ1Cf8saJAjKz98nUhS63cRKg",
  "key17": "3ivRNASc73XSkmgCAmRtxWFwRWjPVd6m1GYqtZ23weueoY84PnXvp3RcSymJrFKyDhwm2dUpbcsUzeLSmjMNfune",
  "key18": "2VE5HTgCrE72JZwwegvcRdP3Ci1UDNpd9q5MawMGb6UMR6c2SiTKGrRBx28twjR3CLroYKXDtfTFfiNag7mhodSY",
  "key19": "56k87Va1tWWC6FEA8QyjaauFoj2aMti19CFSnWqVvfWbNA61xKH9e1C2qw18psTYLNH6pfepTmAx4rQ6ZHu3FvEg",
  "key20": "4G6Y6VkagGbwyrGzXzoDpa8EvCRTj5ucGnEgZXFR8FkVFD59jZTZ3kK2KQ2Ajd2L1JEb6riz6UzgxfnHc3YtdcpQ",
  "key21": "4Kur4aAYtj4LyvtFJREBA8zfqiLbqugZ3g46MkCc1NgrLqQ1sumd7TpzF9YDh7LVkSVgG5EvEF94yFdmuBBeMnY2",
  "key22": "EQumVpPGiQUAhX59MnnSVhdwyJoop2SK9xkadEeGPnTMehsjSNsaEtgX8UHNoQeCn9vSs9wGoXEhSf8355uMjPx",
  "key23": "4pM2GEAqFJ866Jd86DNN16kohF2u1iiwAmuUBnVNPvv7nRuCqTUbmYmp15LHcm7FAzkRjvyPaNhgYvHwvUKhbq6L",
  "key24": "42RrS2Z5kLYo1CAXZppGTaBTqjoELfGbes5PGSK9uakrXv8p5oDita3DnQVhVNgUbEo614sFuKef6izvWEJmYEAL",
  "key25": "5V2euBApRisb7fDFpQDkn58ZEphyMSHnoFdpUcH2CpVeYmcg6SUitCWU5BBFpxecPiTkyN1MXqMtPg8xB4QTUFjL",
  "key26": "4uBT8mwNCzJ6wCn3QCmMnb6AR8VWb3BBKbxb34YKLUtbc2SDPYHaJ9MQGFbspYUM8Ypa2BimN6FmpC2TsKfkhjhs",
  "key27": "5oKLA4tddrQuP8vuMcgUEtKiEiojfrsAdnztQaGAVheNiEK61duU8RspNmgbf6jpxKw3KRiRWwkYKN7siSa81LZH",
  "key28": "3c2TeWNwsQy8XGz7agFEaZH6dfY6dkj2fHeQ3dVQR37P3gDAUGe1YGiQYAAumzj7G2NRGQKm7RC1LBSrEtNWLbQG",
  "key29": "4pGWoJmTKqrnLo4Z4TDYwFZufL82k63kQ4cpYgT3weKQdpuJrSN7X2Pr8RYcT7nDfsiz79Guw21T8HLPYgMm87Wh",
  "key30": "5xDRRfxRxeFiJQGAkVretDffp25o8B4GaQSZ2iDAjxVwCWjsKzzvcRwkojjsaaLxPJVcG3VfJjbanziLbbEbhxZ5",
  "key31": "3LPkvvmeatJybouqJKFiZZrRn2g4FSTYXKDUePHVZs729v38ih6hiKuA6Ggop5wG4HG8r4WBRsdodH4w42CuhxAa",
  "key32": "2yHxKUpjZqQsF9y7sqJGBxb9pFooXZoW4n8rSyfRRt5JvWiPhfjjUxBwjcBeRQqnsf3gE6UywPJCfQ3TcWrni2Pm"
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
